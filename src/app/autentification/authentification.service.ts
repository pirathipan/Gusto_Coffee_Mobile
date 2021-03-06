import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string)  {
    const data = {email, password};
    const url = 'https://localhost:8000/api/login';
    const body     = new URLSearchParams();
    body.append('email', data.email);
    body.append('password', data.password);

    return this.http.post(url, data).pipe(map((res: any) => {
      console.log('res', res);
      return res;
    }));

  }
  logout() {
    localStorage.removeItem('id_token');
  }

  login() {
    return tokenNotExpired();
  }
}

