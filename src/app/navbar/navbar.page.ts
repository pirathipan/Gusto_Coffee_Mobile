import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {ClientService} from '../services/client.service';
import {Router} from "@angular/router";
import {AuthentificationService} from "../autentification/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})

export class NavbarPage implements OnInit   {
  navbarOpen = false;
  openDropdown = false;
  clients: any[] = [];
  rolesAdmin = false;
  clientId: number;
  email: string;
  roles: any;

    constructor(private clientService: ClientService, private router: Router,
                private authenfificationService: AuthentificationService) { }

    ngOnInit() {
      this.email = JSON.parse(localStorage.getItem('id_token')).email;
      this.getClient(this.email);
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

  getClient(email) {
    this.clientService.getClientByEmail(email).subscribe(
      (emailClient) => {
        this.clients.push(emailClient);
        console.log('email client => ', this.clients);
        this.clientId = +emailClient[0].id;
        for (const client of this.clients[0]) {
          this.roles = client.roles;
          console.log(this.roles);
          if (this.roles.length === 2) {
            this.rolesAdmin = true;
            console.log('true');
          }
          if (localStorage.getItem('id_token') == null || this.roles.length === 1) {
            this.rolesAdmin = false;
            console.log('false');
          }

        }
      });
  }

  toggleDropdown() {
    this.openDropdown = !this.openDropdown;
  }

  hasAuthToken() {
    return localStorage.getItem('id_token') !== null;
  }

  onLogout() {
    this.authenfificationService.logout();
    this.router.navigate(['accueil']);

  }
}
