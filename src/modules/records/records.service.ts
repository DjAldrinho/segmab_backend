import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record, RecordDocument } from './schemas/record.schema';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Record.name)
    private readonly recordModel: Model<RecordDocument>,
  ) {}

  findAll(): Promise<Record[]> {
    return this.recordModel.find().limit(100).exec();
  }

  findOne(id: string): Promise<Record> {
    return this.recordModel.findOne({ _id: id }).exec();
  }

  getRecordsGroupedByStatus() {
    try {
      return this.recordModel
        .aggregate([
          {
            $project: {
              estado: {
                $cond: {
                  if: { $eq: ['$status', null] },
                  then: 'pendiente',
                  else: {
                    $cond: {
                      if: { $eq: ['$status', 1] },
                      then: 'creado',
                      else: {
                        $cond: {
                          if: { $eq: ['$status', 2] },
                          then: 'aprobado',
                          else: {
                            $cond: {
                              if: { $eq: ['$status', -1] },
                              then: 'rechazado',
                              else: 'otro',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          { $group: { _id: '$estado', count: { $sum: 1 } } },
          {
            $sort: { count: -1 },
          },
        ])
        .exec();
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      throw error;
    }
  }

  getRecordsGroupedByCode() {
    try {
      return this.recordModel
        .aggregate([
          {
            $group: {
              _id: '$codigo',
              count: { $sum: 1 },
            },
          },
          {
            $sort: { count: -1 },
          },
        ])
        .exec();
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      throw error;
    }
  }

  getRecordsPag() {
    try {
      return this.recordModel
        .aggregate([
          {
            $project: {
              pagable: {
                $cond: {
                  if: { $eq: ['$pag', true] },
                  then: 'pagable',
                  else: 'no pagable',
                },
              },
            },
          },
          {
            $group: {
              _id: '$pagable',
              count: { $sum: 1 },
            },
          },
          {
            $sort: { count: -1 },
          },
        ])
        .exec();
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      throw error;
    }
  }
}
