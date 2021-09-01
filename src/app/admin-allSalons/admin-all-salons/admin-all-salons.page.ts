import { Component, OnInit } from '@angular/core';
import { SalonService } from "../../services/salon.service";

@Component({
  selector: 'app-admin-all-salons',
  templateUrl: './admin-all-salons.page.html',
  styleUrls: ['./admin-all-salons.page.scss'],
})
export class AdminAllSalonsPage implements OnInit {
  loadSalon: any[] = [];

  constructor(private salonService: SalonService) { }

  ngOnInit() {
    this.getSalon()
  }


  //recuperation des salons
  getSalon(){
    this.salonService.getAllSalons().subscribe(
      (salon) => {
        this.loadSalon.push(salon);
        // console.log('salon =>', salon);
      }
    )
  }

}
