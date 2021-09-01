import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    navbarOpen = false;
    navbarOpen1 = false;
    navbarOpen2 = false;


    toggleNavbar() {

        this.navbarOpen = !this.navbarOpen;
    }

    toggleNavbar1() {
        this.navbarOpen1 = !this.navbarOpen1;
    }
    toggleNavbar2() {
        this.navbarOpen2 = !this.navbarOpen2 ;
    }

}
