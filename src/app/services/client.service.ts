import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Iclients } from "../interfaces/iclients";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private api_url = 'https://localhost:8000/api/clients';

  constructor(private http: HttpClient) { }

  // get all clients
  getAllClient() {
    return this.http.get<Iclients>(this.api_url);
  }

   // get single client by id

   getClientById(id: string) {
    return this.http.get(this.api_url + '/' + id);
  }

  // get single client by email
  getClientByEmail(email: string) {
    return this.http.get(this.api_url + '?email=' + email);
  }  

}
