import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAllSalonsPage } from './admin-all-salons.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAllSalonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAllSalonsPageRoutingModule {}
