import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ConvertsService {

	constructor () { }

	addIntoAnArray(array: any, value: any) {
		array.push(value);
		return array;
	}

	getValueFromArray(data: Array<any>, value: Array<any>, keys: Array<any>) {
		data.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			value.push(data.valor);
			keys.push(data.comida);
		});
	}

	toTimestamp = (data: any) => {
		var date: Date = new Date(data * 1000)
		const trueData = `${date.toLocaleDateString("pt-br")} ${date.toLocaleTimeString("pt-br")}`
		return trueData;
	}


	formatToMoney(value: number) {
		const formatter = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
		return formatter.format(value);
	}

	emailIsValid(value: string): boolean {
		let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (value.match(regex)) {
			return true;
		} else {
			return false;
		}
	}
}
