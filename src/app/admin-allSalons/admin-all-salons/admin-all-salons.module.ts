import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAllSalonsPageRoutingModule } from './admin-all-salons-routing.module';

import { AdminAllSalonsPage } from './admin-all-salons.page';
import { AdminLinksPageModule } from '../../admin-links/admin-links/admin-links.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAllSalonsPageRoutingModule,
    AdminLinksPageModule
  ],
  declarations: [AdminAllSalonsPage]
})
export class AdminAllSalonsPageModule {}
