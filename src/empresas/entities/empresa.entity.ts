import { empresaEnum } from "../enum/empresa-enum";

export class Empresa {
    constructor(
        public id: number,
        public nombre: string,
        public sitioWeb: string,
        public tipo: empresaEnum
    ){}
}