import { Injectable } from '@nestjs/common';
import { CreateActaDto } from './dto/create-acta.dto';
import { UpdateActaDto } from './dto/update-acta.dto';

@Injectable()
export class ActasService {
  create(createActaDto: CreateActaDto) {
    return 'This action adds a new acta';
  }

  findAll() {
    return `This action returns all actas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acta`;
  }

  update(id: number, updateActaDto: UpdateActaDto) {
    return `This action updates a #${id} acta`;
  }

  remove(id: number) {
    return `This action removes a #${id} acta`;
  }
}
