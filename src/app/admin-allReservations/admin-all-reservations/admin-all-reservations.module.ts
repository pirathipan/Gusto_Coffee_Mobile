import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAllReservationsPageRoutingModule } from './admin-all-reservations-routing.module';

import { AdminAllReservationsPage } from './admin-all-reservations.page';
import { AdminLinksPageModule } from '../../admin-links/admin-links/admin-links.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAllReservationsPageRoutingModule,
    AdminLinksPageModule
  ],
  declarations: [AdminAllReservationsPage]
})
export class AdminAllReservationsPageModule {}
