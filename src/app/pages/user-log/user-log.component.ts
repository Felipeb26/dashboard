import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserRequestService } from 'src/app/services/user-request.service';
import { Banco } from '../../models/banco';

@Component({
	selector: 'app-user-log',
	templateUrl: './user-log.component.html',
	styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit {
	foto: string = "";
	user!: User;
	bancos!: Banco[];

	enable: string = "disabled";

	constructor (private requests: UserRequestService) { }

	ngOnInit(): void {
		this.getUserNow()
	}


	getUserNow() {
		const email = encodeURIComponent("felipeb2silva@gmail.com");

		this.requests.getUser(email).subscribe((data: User[]) => {
			this.user = data[0];
			this.bancos = this.user.bancos!;
		});
	}

	enableUpdate() {
		if (this.enable.startsWith("false")) {
			this.enable = "disabled"
		} else {
			this.enable = "false";
		}
	}

}
