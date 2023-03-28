import { BATSWORKS, LOGIN } from './../../environments/environment.prod';
import { Token } from '../models/token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UserRequestService {

	constructor (private http: HttpClient) { }

	getLoginToken(username: string, pass: string): Observable<Token> {
		return this.http.get<Token>(`${BATSWORKS}${LOGIN}?username=${username}&senha=${pass}`);
	}

	getUser(username: string): Observable<User[]> {
		return this.http.get<User[]>(`${BATSWORKS}param?email=${username}`)
	}

	saveUser(user:User):Observable<User>{
		return this.http.post<User>(`${BATSWORKS}`,user);
	}
}
