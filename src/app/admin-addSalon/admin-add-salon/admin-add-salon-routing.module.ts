import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddSalonPage } from './admin-add-salon.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAddSalonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddSalonPageRoutingModule {}
