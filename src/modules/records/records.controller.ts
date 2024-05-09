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

  @Get('/query-1')
  findAndGroupByStatus() {
    return this.recordsService.getRecordsGroupedByStatus();
  }

  @Get('/query-2')
  findAndGroupByCode() {
    return this.recordsService.getRecordsGroupedByCode();
  }

  @Get('/query-3')
  findAndCountByPagAttr() {
    return this.recordsService.getRecordsPag();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }
}
