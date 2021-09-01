import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLinksPageRoutingModule } from './admin-links-routing.module';

import { AdminLinksPage } from './admin-links.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLinksPageRoutingModule
  ],
  declarations: [AdminLinksPage],
  exports: [
    AdminLinksPage
],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminLinksPageModule {}
