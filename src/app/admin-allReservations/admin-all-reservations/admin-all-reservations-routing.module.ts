import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAllReservationsPage } from './admin-all-reservations.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAllReservationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAllReservationsPageRoutingModule {}
