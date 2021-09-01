import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SignupPageRoutingModule,
        FooterPageModule,
        RecaptchaModule,
        RecaptchaFormsModule,
    ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
