import { empresaEnum } from "../enum/empresa-enum";

export class CreateEmpresaDto {
    public nombre: string;
    public sitioWeb: string;
    public tipo: empresaEnum;
}
