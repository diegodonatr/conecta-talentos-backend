import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {

  empresas: Empresa[] = [];

  create(createEmpresaDto: CreateEmpresaDto): void{
    if (this.empresas.find(empresa => empresa.nombre.toLowerCase() === createEmpresaDto.nombre.toLowerCase())) {
      throw new BadRequestException('Ya existe una empresa con ese nombre');
    }

    const empresaCreada = new Empresa(
      this.empresas.length + 1,
      createEmpresaDto.nombre,
      createEmpresaDto.sitioWeb,
      createEmpresaDto.tipo
    )
    this.empresas.push(empresaCreada);
  }

  findAll() {
    return `This action returns all empresas`;
  }

  findOne(id: number): Empresa | undefined {
    const empresaEncontrada = this.empresas.find(empresa => empresa.id = +id);
    if (!empresaEncontrada) {
      throw new NotFoundException('Empresa no encontrada');
    }
    return empresaEncontrada;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
