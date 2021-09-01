import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { ImageService } from "../../services/image.service";
import { SalonService } from "../../services/salon.service";
import { ActivationStart, Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-admin-add-salon',
  templateUrl: './admin-add-salon.page.html',
  styleUrls: ['./admin-add-salon.page.scss'],
})
export class AdminAddSalonPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  salonForm: FormGroup;
  loadCategory: any[] = [];
  img: any;
  loadImage: any[] = [];
  picture = [];
  isSelectedPlace = false;
  nombrePlaces = [4, 6, 120];

  shortLink: string = "";
  loading: boolean = false;
  file: File = null;
  interval;

  constructor(private fb: FormBuilder, private http: HttpClient, private imageService: ImageService, private salonService: SalonService,  private router: Router) { }

  ngOnInit() { 

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "errorpage")
          this.outlet.deactivate();
  });
  
     // formulaire 
     this.salonForm = this.fb.group({
      nomSalon: ['', Validators.required],
      descriptionSalon: ['', Validators.required],
      prix: ['', Validators.required],
      nombrePlaces: ['', Validators.required],
    });

   this.getImage();
   this.onUpload()
  }


  


  // recuperation des images
  getImage() {

    this.imageService.getAllMediaObject().subscribe((media_object) => {

      this.loadImage.push(media_object);
      // console.log('image', media_object);
      console.log('load image =>', this.loadImage);
    })

  }


  // telecharger une image
  upload(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    console.log('file =>', this.file);
    this.imageService.uploadFile(this.file).subscribe(
      (event: any) => {
        console.log('event =>', event);
        if (typeof (event) === 'object') {
          this.shortLink = event.link;
          this.loading = false;
        }
        this.exit();
      }
    )
  }

  //chargement de la page
  exit() {
    window.location.reload();
  }




  // select une image
  getImageName(id: number, i: number) {

    this.imageService.getSingleImage(id).subscribe(img => {
      console.log('imggggggg =>', img);
      this.img = img;

    })
    for (let x = 0; x < this.loadImage[0].length; x++) {
      let element = document.getElementById("image" + x);
      if (i == x) {

        element.classList.add("selectedBackground");
      } else {

        element.classList.remove("selectedBackground");
      }
    }
  }


  //rajouter un nouveau salon dans la base de donnee
  addSalon(nomSalon: string, descriptionSalon: string, prix: number, nombrePlaces: number, image: any) {
    const salon = { nomSalon, descriptionSalon, prix, nombrePlaces, image }
    this.http.post('https://localhost:8000/api/salons', salon).subscribe(
      (res) => {
        console.log('Resultat', res);
      }
    )
  }

    // BOUTON DE VALIDATION
    onSubmit() {
      console.log("ok")
      if (this.salonForm.invalid) {
        return;
      }
  
      const nomSalon = this.salonForm.get('nomSalon').value;
      const descriptionSalon = this.salonForm.get('descriptionSalon').value;
      const prix = this.salonForm.get('prix').value;
      const nombrePlaces = this.salonForm.get('nombrePlaces').value;
      const image = '/api/media_objects/' + this.img.id;
  
      console.log(this.salonForm.value);
      console.log('nom => ', nomSalon);
      console.log('desc => ', descriptionSalon);
      console.log('prix => ', prix);
      console.log('places => ', nombrePlaces);
      console.log('image => ', image);
  
  
      this.addSalon(nomSalon, descriptionSalon, prix, nombrePlaces, image);
      (<HTMLFormElement>document.getElementById("login")).reset();
  
    }


}
