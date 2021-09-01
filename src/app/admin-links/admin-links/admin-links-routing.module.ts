import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLinksPage } from './admin-links.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLinksPageRoutingModule {}
