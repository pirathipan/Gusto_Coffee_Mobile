import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'offres',
    loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)
  },
  {
    path: 'offres/:id',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./autentification/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./autentification/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
 
  

  {
    path: 'admin-all-salons',
    loadChildren: () => import('./admin-allSalons/admin-all-salons/admin-all-salons.module').then( m => m.AdminAllSalonsPageModule)
  },
  {
    path: 'admin-all-reservations',
    loadChildren: () => import('./admin-allReservations/admin-all-reservations/admin-all-reservations.module').then( m => m.AdminAllReservationsPageModule)
  },
  {
    path: 'admin-add-salon',
    loadChildren: () => import('./admin-addSalon/admin-add-salon/admin-add-salon.module').then( m => m.AdminAddSalonPageModule)
  },
  {
    path: 'admin-links',
    loadChildren: () => import('./admin-links/admin-links/admin-links.module').then( m => m.AdminLinksPageModule)
  },
 
 

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
