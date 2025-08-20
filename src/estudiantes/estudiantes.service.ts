import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EstudiantesService {
  estudiantes: Estudiante[] = [];

  create(createEstudianteDto: CreateEstudianteDto): void {
    if (this.estudiantes.find(est => est.email === createEstudianteDto.email)) {
      throw new BadRequestException(`Ya existe un usuario registrado con el email ${createEstudianteDto.email}`)
    }

    const idNew = this.estudiantes.length + 1;
    const estudianteNew  = new Estudiante(
      idNew,
      createEstudianteDto.nombre,
      createEstudianteDto.apellidos,
      createEstudianteDto.edad,
      createEstudianteDto.profesion,
      createEstudianteDto.email
    )
    this.estudiantes.push(estudianteNew);
  }

  findAll(): Estudiante[]{
    return this.estudiantes;
  }

  findOne(id: number) {
    const estudianteEncontrado = this.estudiantes.find(estudiante => estudiante.id === +id)
    if (!estudianteEncontrado){
      throw new NotFoundException(`No se encuentra el usuario con el id ${id}`);
    }
    return estudianteEncontrado;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto): void {
    let estudianteAModificar = this.findOne(+id);
    if (updateEstudianteDto.nombre){
      estudianteAModificar.nombre = updateEstudianteDto.nombre;
    }
    if (updateEstudianteDto.apellidos){
      estudianteAModificar.apellidos = updateEstudianteDto.apellidos;
    }
    if (updateEstudianteDto.edad){
      estudianteAModificar.edad = updateEstudianteDto.edad;
    }
    if (updateEstudianteDto.profesion){
      estudianteAModificar.profesion = updateEstudianteDto.profesion;
    }
  }

  remove(id: number): void {
    const estudianteAEliminar = this.findOne(+id);
    if (!estudianteAEliminar) {
      throw new NotFoundException(`Estudiante con id ${id} no encontrado`)
    }
    this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== +id);
  }
}
