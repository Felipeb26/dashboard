import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-flip-card',
	templateUrl: './flip-card.component.html',
	styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

	toogleProperty: boolean = false

	constructor () { }

	ngOnInit(): void {
	}


	toggle() {
		this.toogleProperty = !this.toogleProperty;
	}
}
