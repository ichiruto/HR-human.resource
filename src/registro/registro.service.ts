import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Injectable()
export class RegistroService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const dataRegistro = await this.prisma.registro.findMany({});
    return {
      statusCode: 200,
      data: dataRegistro,
    };
  }

  async findOne(id: number) {
    const dataRegistro = await this.prisma.registro.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataRegistro,
    };
  }

  async create(createRegistroDto: CreateRegistroDto) {
    const createData = await this.prisma.registro.create({
      data: createRegistroDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

  async update(id: number, updateRegistroDto: UpdateRegistroDto) {
    const updateRegistro = await this.prisma.registro.update({
      data: updateRegistroDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: updateRegistro,
    };
  }

  async remove(id: number) {
    const deleteRegistro = await this.prisma.registro.delete({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: deleteRegistro,
      message: `Success delete ${id}`,
    };
  }
}
