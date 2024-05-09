import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActasService } from './actas.service';
import { CreateActaDto } from './dto/create-acta.dto';
import { UpdateActaDto } from './dto/update-acta.dto';

@Controller('actas')
export class ActasController {
  constructor(private readonly actasService: ActasService) {}

  @Post()
  create(@Body() createActaDto: CreateActaDto) {
    return this.actasService.create(createActaDto);
  }

  @Get()
  findAll() {
    return this.actasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActaDto: UpdateActaDto) {
    return this.actasService.update(+id, updateActaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actasService.remove(+id);
  }
}
