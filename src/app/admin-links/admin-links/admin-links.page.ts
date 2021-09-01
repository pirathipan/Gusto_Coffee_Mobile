import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-links',
  templateUrl: './admin-links.page.html',
  styleUrls: ['./admin-links.page.scss'],
})
export class AdminLinksPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "errorpage")
          this.outlet.deactivate();
  });
  }

}
