import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { RegistroService } from './registro.service';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Controller('registros')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Get()
  async findAll() {
    return await this.registroService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.registroService.findOne(+id);
  }

  @Post()
  async create(@Body() createRegistroDto: CreateRegistroDto) {
    return await this.registroService.create(createRegistroDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRegistroDto: UpdateRegistroDto,
  ) {
    return await this.registroService.update(+id, updateRegistroDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.registroService.remove(+id);
  }
}
