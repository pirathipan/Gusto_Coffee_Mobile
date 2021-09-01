import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddSalonPageRoutingModule } from './admin-add-salon-routing.module';

import { AdminAddSalonPage } from './admin-add-salon.page';
import { AdminLinksPageModule } from '../../admin-links/admin-links/admin-links.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddSalonPageRoutingModule,
    AdminLinksPageModule,
    ReactiveFormsModule
  ],
  declarations: [AdminAddSalonPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminAddSalonPageModule {}
