import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ToastsService {

	constructor (private toast: ToastrService) { }

	sucessT(message: string, title: string) {
		this.toast.success(message, title);
	}
	warnT(message: string, title: string) {
		this.toast.warning(message, title);
	}
	infoT(message: string, title: string) {
		this.toast.info(message, title);
	}
	errorT(message: string, title: string) {
		this.toast.error(message, title);
	}

	sucess(message: string) {
		this.toast.success(message);
	}
	info(message: string) {
		this.toast.info(message);
	}
	error(message: string) {
		this.toast.error(message);
	}
	wanning(message: string) {
		this.toast.warning(message);
	}

}
