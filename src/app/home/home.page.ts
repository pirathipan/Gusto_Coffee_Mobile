import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';



import { SalonService } from "../services/salon.service";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
};

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})


export class HomePage {

    @ViewChild('slides', { static: true }) slides: IonSlides;
    @ViewChild('slides2', { static: true }) slides2: IonSlides;
    @ViewChild('slides3', { static: true }) slides3: IonSlides;

    loadSalon: any[] = [];
   
   

    constructor(private router: Router,  private salonService: SalonService) { }

    ngOnInit() {}

    ngAfterViewInit() {
        this.getAllSalon();
    }


    // recuperation des salons
    getAllSalon() {
        this.salonService.getAllSalons().subscribe(
            (salon) => {
                this.loadSalon.push(salon);
                console.log('salon =>', salon);

            })
    }

    //recuperation d'un salon quand on click sur Découvrir le salon
    navigateByUrl(salon) {
        const link = ['/offres', salon.id];
        this.router.navigate(link);
    }



    // ----slide ------
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

    next3() {
        this.slides3.slideNext();
    }

    prev3() {
        this.slides3.slidePrev();
    }

}
