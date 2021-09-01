import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Isalons } from "../interfaces/isalons";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};


@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private api_url = 'https://localhost:8000/api/salons';

  constructor(private http: HttpClient) { }

  // Get all Salons

  getAllSalons() {
    return this.http.get<Isalons>(this.api_url);
}


 // get single salon

 getSingleSalon(id: number) {
  return this.http.get(this.api_url + "/" + id);
}


}
