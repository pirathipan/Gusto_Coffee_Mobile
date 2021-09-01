import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  // latitude et longitude de la gare du nord [gare du nord, 18 rue de dunkerque, 75010 paris, france]
  lat = 48.8809;
  lng =  2.3553;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  // return form errors
  get form() {
    return this.contactForm.controls
  }

  onContactForm() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return ;
    }

    const nom = this.contactForm.get('nom').value;
    const prenom = this.contactForm.get('prenom').value;
    const email = this.contactForm.get('email').value;
    const telephone = this.contactForm.get('telephone').value;
    const message = this.contactForm.get('message').value;

    console.log('nom => ', nom);
    console.log('prenom => ', prenom);
    console.log('email => ', email);
    console.log('telephone => ', telephone);
    console.log('message => ', message);

    this.contactForm.reset();
  }

}
