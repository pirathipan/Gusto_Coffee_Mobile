import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import {FooterPageModule} from "../../footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SigninPageRoutingModule,
        FooterPageModule,
        ReactiveFormsModule 
    ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
