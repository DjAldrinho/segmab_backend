import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form, FormDocument } from './schemas/form.schema';

@Injectable()
export class FormsService {
  constructor(
    @InjectModel(Form.name)
    private readonly formModel: Model<FormDocument>,
  ) {}

  findAll() {
    return this.formModel.find().exec();
  }

  findOne(id: string) {
    return this.formModel.findOne({ _id: id }).exec();
  }
}
