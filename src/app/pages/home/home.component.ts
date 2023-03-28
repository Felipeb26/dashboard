import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { CotacaoRequestService } from 'src/app/services/cotacao-request.service';
import { Cotacao } from '../../models/cotacao';
import { Type } from '../../models/types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	BITCOIN: boolean = true;
	EURO: boolean = false;
	DOLLAR: boolean = false;

	ids: any = [];
	cotacoes: Cotacao[] = [];
	codes: Array<any> = []
	bids: Array<any> = []
	nome: string = "BTCBRL"

	EURBRL: Array<any> = [];
	BTCBRL: Array<any> = [];
	USDBRL: Array<any> = [];


	constructor (
		private cotacaoRequest: CotacaoRequestService,
		private cotacaoService: CotacaoRequestService,
		private chart: ChartService,) { }

	ngOnInit(): void {
		this.getCurrency();
	}

	check(event: any, id: string) {
		const value = event.checked;
		if (value) {
			this.nome = id;
		}
		if (id.startsWith("BTC")) {
			this.BITCOIN = value;
			this.EURO = false;
			this.DOLLAR = false;
		} else if (id.startsWith("EUR")) {
			this.BITCOIN = false;
			this.EURO = value;
			this.DOLLAR = false;
		} else if (id.startsWith("USD")) {
			this.BITCOIN = false;
			this.EURO = false;
			this.DOLLAR = value;
		}
	}

	getCurrency() {
		this.cotacaoRequest.getCurrency().subscribe((data: Type[]) => {
			data.forEach(it => {
				this.cotacoes.push(it.cotacao);
				this.codes.push(it.cotacao.code);
				this.bids.push(it.cotacao.bid);

				if (it.currency.startsWith("USDBRL")) {
					this.chart.renderDonutChart("USD", [it.cotacao.code], [it.cotacao.bid]);
				} else if (it.currency.startsWith("EURBRL")) {
					this.chart.renderDonutChart("EUR", [it.cotacao.code], [it.cotacao.bid]);
				} else if (it.currency.startsWith("BTCBRL")) {
					this.chart.renderDonutChart("BTC", [it.cotacao.code], [it.cotacao.bid]);
				}
			});
		});
	}

}
