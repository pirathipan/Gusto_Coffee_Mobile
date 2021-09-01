import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { render } from 'creditcardpayments/creditCardPayments';
import { SalonService } from '../services/salon.service';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  @ViewChild('slides2', { static: true }) slides2: IonSlides;

  salonList: any[] = [];
  reserveForm: FormGroup;
  errorMsg = ' ';
  startedDate;
  currentHours;
  salonId: number;
  clientId: number;
  duree: number;
  price: number;
  reserved = false;
  currentDate: any;
  debut: any;
  fin: any;
  listDate: any;
  listHeureDebut: any;
  listHeureFin: any;

  dateDebut: any;
  heureDebut: any;
  heureFin: any;
  client: any;
  salon: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private salonService: SalonService,
    private clientService: ClientService,
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {

    //formulaire
    this.reserveForm = this.fb.group({
      dateDebut: ['', [Validators.required]],
      heureDebut: ['', Validators.required],
      heureFin: ['', Validators.required]
    });

    // récuperation de l'id du salon
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log('salon id =>', id);

    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('id')) {
        await this.router.navigate(['/offres']);
      }
      this.salonId = +paramMap.get('id');
      this.getSalonById(this.salonId);
      const email = JSON.parse(localStorage.getItem('id_token')).email;
      this.getClientByEmail(email);
    });




    this.startedDate = new Date().toISOString().slice(0, 10);

    render({
      id: '#payments',
      currency: 'EUR',
      value: '60.00',
      onApprove: (details) => {
        alert('Transaction successfull');
      }
    });

    setTimeout(function () {
      
    }, 2000);
      
    


  }

  //----get single salon by id------
  getSalonById(id) {
    this.salonService.getSingleSalon(id).subscribe(
      (salon) => {
        console.log('salonnnnnnnnnnnnnnnnnn =>', salon);
        this.salonList.push(salon);
      }
    );
  }


  //-----prix envoyer a  paypal-----

  //   getSalonPrice(id) {
  //     this.salonService.getSingleSalon(id).subscribe(
  //       (salon) => {
  //         this.price = salon['prix'];
  //       }
  //     )
  //   }


  // ---- recuperation du client pour la reservation -------
  getClientByEmail(email) {
    this.clientService.getClientByEmail(email).subscribe(
      (cl) => {
        this.clientId = cl[0].id;
        console.log('client Id=>', cl[0].id);
      }
    );
  }



  //------- calcule l'heure de fin et l'heure du debut condition : l'heure de fin doit etre superieure a l'heure de debut sinon message d'erreur -------

  calculDifferenceHeure() {
    const heureDebut = (document.getElementById('heureDebut') as HTMLInputElement).value;
    const heureFin = (document.getElementById('heureFin') as HTMLInputElement).value;

    this.debut = heureDebut.split(':');
    console.log('heure de debut', this.debut);
    this.fin = heureFin.split(':');
    console.log('heure de fin', this.heureFin);


    if (parseInt(this.fin, 10) > parseInt(this.debut, 10)) {

      this.duree = parseInt(this.fin, 10) - parseInt(this.debut, 10);
    } else {
      this.errorMsg = 'L\'heure de fin doit être supérieure à l\'heure de debut';
    }

    console.log('duree => ', this.duree);

  }


  //------------------- return le token du client si il est pas a null---------------------

  hasAuthToken() {
    return localStorage.getItem('id_token') !== null;
  }


  // -------------------- rajouter une reservation dans la base de donnee  --------------------

  addReservation(dateDebut: Date, client: any, heureDebut: any, heureFin: any, salon: any, duree: number) {
    const reservation = { dateDebut, client, heureDebut, heureFin, salon, duree };
    console.log('Reservation => ', reservation);

    this.http.post('https://localhost:8000/api/reservations', reservation).subscribe(response => {
      console.log('Response => ', response);
    });
  }



  // ------ bouton de validation avec les value de l'utilisateur avec la fonction addReservation qui rajoute une nouvelle reservation a la base de donnee ----------

  onSubmit() {
    if (this.reserveForm.invalid) {
      return;
    }


    this.dateDebut = this.reserveForm.get('dateDebut').value;
    this.heureDebut = this.reserveForm.get('heureDebut').value;
    this.heureFin = this.reserveForm.get('heureFin').value;

    this.salon = 'api/salons/' + this.salonId;

    this.client = 'api/clients/' + this.clientId;


    console.log('dateDebut => ', this.dateDebut);
    console.log('heureDebut => ', this.heureDebut);
    console.log('heureFin => ', this.heureFin);
    console.log('salonId => ', this.salon);
    console.log('clientId => ', this.client);
    console.log('duree => ', this.duree);
    console.log('reserved => ', this.reserved);

    console.log('---------------------------------------------------------');
    console.log('formValue =>', this.reserveForm.value);


    this.addReservation(this.dateDebut, this.client, this.heureDebut, this.heureFin, this.salon, this.duree);

    this.reserveForm.reset();

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
