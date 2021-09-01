import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SalonService } from "../services/salon.service";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

    @ViewChild('slides', { static: true }) slides: IonSlides;
    @ViewChild('slides2', { static: true }) slides2: IonSlides;

    loadSalon: any[] = [];

    constructor( private salonService: SalonService) { }

    ngOnInit() {
       
    }

    ngAfterViewInit() {
        this.getAllSalon();
        
    }


      // recuperation des salons
      getAllSalon() {
        this.salonService.getAllSalons().subscribe(
            (salon) => {
                this.loadSalon.push(salon);
            })
    }


    // slide

    next() {
        this.slides.slideNext();
    }

    prev() {
        this.slides.slidePrev();
    }

    next2() {
        this.slides2.slideNext();
    }

    prev2() {
        this.slides2.slidePrev();
    }

}
