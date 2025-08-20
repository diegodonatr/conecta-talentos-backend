import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Estudiante } from './estudiantes/entities/estudiante.entity';
import { get } from 'http';
import { UpdateEstudianteDto } from './estudiantes/dto/update-estudiante.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
