import { Banco } from "./banco"

export interface User {
	id?: number,
	nome: string,
	email: string,
	roles: string,
	senha: string,
	nascimento: string
	bancos?:Array<Banco>
}
