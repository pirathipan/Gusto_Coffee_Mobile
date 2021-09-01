import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../services/reservation.service"

@Component({
  selector: 'app-admin-all-reservations',
  templateUrl: './admin-all-reservations.page.html',
  styleUrls: ['./admin-all-reservations.page.scss'],
})
export class AdminAllReservationsPage implements OnInit {

  allReseravation: any[] = [];

  constructor(private reservationService:ReservationService) { }

  ngOnInit() {
    this.getReservation();
  }

  // recueration de tout les reservations
  getReservation() {
    this.reservationService.getAllReservation().subscribe(
      (reser) => {
       
        this.allReseravation.push(reser);
        console.log('reservation =>', this.allReseravation);
      }
    )
    
  }

}
