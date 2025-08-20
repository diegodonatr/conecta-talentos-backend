import { PartialType } from '@nestjs/swagger';
import { CreateEstudianteDto } from './create-estudiante.dto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    public nombre?: string;
    public apellidos?: string;
    public edad?: number;
    public profesion?: string;
}
