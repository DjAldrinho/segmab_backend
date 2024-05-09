import { Controller, Get, Param } from '@nestjs/common';
import { FormsService } from './forms.service';

import { ApiTags } from '@nestjs/swagger';

@Controller('forms')
@ApiTags('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get()
  findAll() {
    return this.formsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(id);
  }
}
