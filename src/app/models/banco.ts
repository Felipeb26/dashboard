export interface Banco {
	id?: string | number,
	nome: string,
	emprestimo?: number,
	debito: number,
	credito: number,
	poupanca?: number,
	conta?: string | number,
	agencia?: string | number,
	value?: number
}
