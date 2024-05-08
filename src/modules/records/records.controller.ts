import { Controller, Get, Param } from '@nestjs/common';
import { RecordsService } from './records.service';

import { ApiTags } from '@nestjs/swagger';

@Controller('records')
@ApiTags('record')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }
}
