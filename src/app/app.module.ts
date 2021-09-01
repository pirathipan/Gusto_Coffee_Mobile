import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import {AuthHttp} from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavbarPage } from '../app/navbar/navbar.page'
import {FooterPageModule} from "./footer/footer.module";
import { AdminLinksPageModule } from './admin-links/admin-links/admin-links.module';





@NgModule({
  declarations: [AppComponent, NavbarPage ],
  entryComponents: [],
    imports: [
      BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule, 
      FooterPageModule, 
      AdminLinksPageModule,
      HttpClientModule,
      RecaptchaModule,
      RecaptchaFormsModule,
    ],
  providers: [
    {
      provide: AuthHttp
    },
    { 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
