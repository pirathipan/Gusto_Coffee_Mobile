import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  loginForm: FormGroup;
  error = '';
  showErrorMessage: boolean;

  constructor(private router: Router, private fb: FormBuilder, private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    //formulaire
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.getCurrentUserData();
  }

  //deconnecter
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['accueil']);
  }

  // retour sur inscription
  createCompte() {
    this.router.navigate(['inscription']);
  }

  //connexion
  login() {
    this.showErrorMessage = false;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authenticationService.authenticate(email, password).subscribe(
      (data) => {
        localStorage.setItem('id_token', JSON.stringify({email, token: data.token}));
        this.router.navigate(['accueil']);

      },
      (error) => {
        this.error = error.message;
        this.showErrorMessage = true;
      }
    );
  }


  //recuperation du token
  // getCurrentUserData() {
  //   console.log('Current User', JSON.parse(localStorage.getItem('id_token')).email);
  //   return JSON.parse(localStorage.getItem('id_token')).email;
  // }

}
