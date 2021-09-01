import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Iclients } from "../../interfaces/iclients";
import { ClientService } from "../../services/client.service";

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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  submited = false;

  siteKey: string = "6LdepjccAAAAAJI1IbNcJzoBnz_EJriTlqjkwBdM";
  isCaptchaValid = false;

  clients: Iclients[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private clientService: ClientService,
    private router: Router
  ) { }


  ngOnInit() {
    //FORMULAIRE
    this.signupForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(8)]],
      password1: ['', Validators.required],
      telephone: ['', [ Validators.required, Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')]],
      recaptcha: ['', Validators.required]
  }),
    {
      validators: this.MustMatch('password', 'password1')
    }
  }

  // fonction d'erreur
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

// RECUPERATION DU FORMULAIRE
  get form() {
    return this.signupForm.controls;
  }

  // rajouter un client dans la base de donnee
  addClient(email: string, roles: [], password: string, nomClient: string, prenomClient: string, telephone: string) {
    const client: Iclients = {email, roles: ['ROLE_USER'], password, nomClient, prenomClient,  telephone }
    console.log('Clienttttttttt', client);
    this.http.post('https://localhost:8000/api/clients', client).subscribe(response => {
      this.clients.push(client);
 
    });

  }

  // bouton de validation formulaire
  onSubmit() {
    this.submited = true;

    if (this.signupForm.invalid) {
      return;
    
    }

    const nomClient = this.signupForm.get('firstName').value;
    const prenomClient = this.signupForm.get('lastName').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const telephone = this.signupForm.get('telephone').value;
    const roles = [];

    this.addClient(email, roles['ROLE_USER'], password, nomClient, prenomClient, telephone);
    this.router.navigate(['/connexion']);
  }

// captcha 
captchaResolved(ev){
  console.log("captcha resolved", ev);
  this.isCaptchaValid = true
}


}
