import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	tables = document.getElementsByTagName(
		"app-table"
	) as HTMLCollectionOf<HTMLElement>;
	cards = document.getElementsByTagName(
		"app-cards"
	) as HTMLCollectionOf<HTMLElement>;

	state: string = "table_view";

	list: Array<any> = []

	todo: Array<any> = [{
		comida: "lazanha",
		valor: 10
	}, {
		comida: "macarrao",
		valor: 9
	}, {
		comida: "bolo",
		valor: 8
	}
	]

	madeit: Array<any> = [{
		comida: "arroz",
		valor: 10
	}, {
		comida: "pamonha",
		valor: 9
	}, {
		comida: "feijao",
		valor: 8
	}
	]

	finale: Array<any> = [{
		comida: "arroz doce",
		valor: 10
	}, {
		comida: "coxinha",
		valor: 9
	}, {
		comida: "lazanha de bolonhesa",
		valor: 15
	}
	]

	constructor () { }

	ngOnInit(): void {
		this.list.push(this.todo);
		this.list.push(this.madeit);
		this.list.push(this.finale);
	}

	reload() {
		window.location.reload();
	}

	changeComponent() {
		if (this.state.startsWith("table")) {
			this.cards[0].style.display = "none";
			this.tables[0].style.display = "flex";
			this.state = "space_dashboard";
		} else {
			this.cards[0].style.display = "flex";
			this.tables[0].style.display = "none";
			this.state = "table_view";
		}
	}

}
