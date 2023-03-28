import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { ConvertsService } from '../../services/converts.service';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnChanges {
	@Input() todo: Array<any> = []
	@Input() madeit: Array<any> = []
	@Input() finale: Array<any> = []


	inputs = document.getElementsByClassName(
		"inputs"
	) as HTMLCollectionOf<HTMLElement>;
	actionsInputs = document.getElementsByClassName(
		"actions"
	) as HTMLCollectionOf<HTMLElement>;
	btnShowActions = document.getElementsByClassName(
		"add"
	) as HTMLCollectionOf<HTMLElement>;

	key: string = "";
	value: string = "";

	chartT: any;
	chartM: any;
	chartF: any;

	todoValues: any = [];
	madeitValues: any = [];
	finaleValues: any = [];

	todoKey: any = [];
	madeitKey: any = [];
	finaleKey: any = [];

	somaTodo: any = 0;
	somaMadeit: any = 0;
	somaFinale: any = 0;

	trash: Array<any> = []

	constructor (private chart: ChartService,
		private convert: ConvertsService) { }

	ngOnChanges(): void {
		this.setValue();
		this.createCharts();
	}

	drop(event: CdkDragDrop<any[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
			this.setValue()
			this.createCharts();
		}
	}

	setValue() {
		this.somaTodo = 0;
		this.somaMadeit = 0;
		this.somaFinale = 0;

		this.todoValues = [];
		this.madeitValues = [];
		this.finaleValues = [];

		this.todoKey = [];
		this.madeitKey = [];
		this.finaleKey = [];

		this.convert.getValueFromArray(this.todo, this.todoValues, this.todoKey);
		this.convert.getValueFromArray(this.madeit, this.madeitValues, this.madeitKey);
		this.convert.getValueFromArray(this.finale, this.finaleValues, this.finaleKey);

		this.todo.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaTodo += data.valor;
		});

		this.madeit.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaMadeit += data.valor;
		});

		this.finale.map(it => {
			const data = JSON.parse(JSON.stringify(it));
			this.somaFinale += data.valor;
		});
	}

	createCharts() {
		this.chart.destoryChart(this.chartT);
		this.chart.destoryChart(this.chartM);
		this.chart.destoryChart(this.chartF);
		this.chartT = this.chart.renderPieChart("piechart", "pie", this.todoValues, this.todoKey);
		this.chartM = this.chart.renderPieChart("madeits", "pie", this.madeitValues, this.madeitKey);
		this.chartF = this.chart.renderPieChart("finales", "pie", this.finaleValues, this.finaleKey);
	}

	addValue(id: number) {
		const chave = this.key;
		const valor = this.value;

		if (chave.trim() == "" || valor.trim() == "") {
			return;
		}

		const obj = {
			comida: chave,
			valor: Number(valor)
		}
		if (id == 0) {
			this.todo.push(obj);
		} else if (id == 1) {
			this.madeit.push(obj);
		} else if (id == 2) {
			this.finale.push(obj);
		}

		this.setValue()
		this.createCharts()
	}

	reload() {
		window.location.reload();
	}

	delete() {
		console.log(this.trash)
	}

	showInputs(event: any) {
		this.inputs[event].style.display = "flex";
		this.actionsInputs[event].style.display = "flex";
		this.btnShowActions[event].style.display = "none";
	}
	hideInputs(event: number) {
		this.inputs[event].style.display = "none";
		this.actionsInputs[event].style.display = "none";
		this.btnShowActions[event].style.display = "flex";
	}
}
