import { ToastsService } from 'src/app/services/toasts.service';
import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file';
import { ConvertsService } from 'src/app/services/converts.service';
import { UserRequestService } from 'src/app/services/user-request.service';

@Component({
	selector: 'app-create-login',
	templateUrl: './create-login.component.html',
	styleUrls: ['./create-login.component.scss']
})
export class CreateLoginComponent implements OnInit {
	file!: File | Blob
	preview: string = "";
	enabled: boolean = false
	subtitle: string = "";

	hide: boolean = false;

	nome: string = "";
	email: string = "";
	senha: string = "";
	data: string = ""

	constructor (private convert: ConvertsService,
		private toast: ToastsService,
		private request: UserRequestService) { }

	ngOnInit(): void {
	}

	selectFile(event: any) {
		this.file = event.target.files[0];
		const file = this.file as File;
		this.subtitle = file.name;

		const reader = new FileReader();
		reader.readAsDataURL(this.file as Blob)
		reader.onload = (action: any) => {
			this.preview = action.target.result;
		}

		const date = new Date(this.data).toISOString().slice(0, 10);

		// console.log(date);
		// console.log(typeof (this.data))
	}

	saveUser() {
		// const valid = this.convert.emailIsValid(this.email);
		// // if (valid === false) {
		// // 	this.toast.errorT("email não é valido!", "ERRO DE EMAIL!")
		// // 	return;
		// // }
		const date = new Date(this.data).toISOString().slice(0, 10);

		const user = {
			nome: this.nome,
			email: this.email,
			senha: this.senha,
			nascimento: date,
			roles: "ROOT"
		}
		this.request.saveUser(user).subscribe((data: any) => {
			console.log(data);
		});

	}

}
