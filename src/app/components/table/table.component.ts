import { Component, Input, OnChanges } from '@angular/core';
import { ConvertsService } from 'src/app/services/converts.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
	@Input() lista: Array<any> = [];

	fullList: Array<any> = [];

	prepared: Array<any> = [];
	preparing: Array<any> = []
	finished: Array<any> = [];

	constructor (private convert: ConvertsService) { }

	ngOnChanges(): void {
		this.prepared = this.lista[0];
		this.preparing = this.lista[1];
		this.finished = this.lista[3];

		for (let i = 0; i < this.lista.length; i++) {
			this.lista[i].map((it: any) => {
				this.fullList.push(it)
			})
		}
	}


}
