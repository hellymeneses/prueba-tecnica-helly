import { Rol } from "./rol";

export class Usuario {
	id_usuario!: number;
	nombre!: string;
	activo!: string;
	rol!: Rol;
}