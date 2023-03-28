import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	actual_url: string = "";
	opened: boolean = false;
	state: string = "light"

	constructor (private route: Router) { }

	ngOnInit(): void {
		this.checkyStyle();
	}

	sair() {
		this.route.navigate(["login"])
	}

	changeState() {
		this.urlAtual();
		const html = document.querySelector('html')
		if (this.state.startsWith("light")) {
			html!.setAttribute("dark", "true");
			localStorage.setItem('dark-mode', "true");
			localStorage.setItem("context", "#00ffff")
			window.location.href = this.actual_url;
			this.state = "dark";
		} else {
			localStorage.removeItem('dark-mode');
			localStorage.removeItem("context")
			html!.removeAttribute("dark");
			window.location.href = this.actual_url;
			this.state = "light";
		}
	}

	checkyStyle() {
		const html = document.querySelector('html')
		const style = localStorage.getItem("dark-mode");
		if (style?.startsWith("true")) {
			html!.setAttribute("dark", "true");
			localStorage.setItem("context", "#00ffff")
			this.state = "dark";
		}
	}

	urlAtual() {
		var url_atual = window.location.href;
		this.actual_url = url_atual.substring(url_atual.lastIndexOf("/"), url_atual.length);
	}

}
