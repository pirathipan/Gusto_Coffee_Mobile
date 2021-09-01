import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Ireservations } from "../interfaces/ireservations";


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

export class ReservationService {

  private api_url = 'https://localhost:8000/api/reservations';

  constructor(private http: HttpClient) { }

  // get all reservations
  getAllReservation() {
    return this.http.get<Ireservations>(this.api_url);
  }

  // get single reservation by id
  getSingleReservation(id: number) {
    return this.http.get(this.api_url + '/' + id);
  }

  // get single reservation by client
  getReservationByClient(clientId: number) {
    return this.http.get(this.api_url + '?client=' + clientId);
  }

}
