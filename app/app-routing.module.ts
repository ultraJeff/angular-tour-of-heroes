import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

// The Angular router is an external, optional Angular NgModule called RouterModule.
// The router is a combination of multiple provided services (RouterModule),
// multiple directives (RouterOutlet, RouterLink, RouterLinkActive), and a configuration (Routes)
// ========================================================================================================
// We use the forRoot method because we're providing a configured router at the root of the application.
// The forRoot method gives us the Router service providers and directives needed for routing, and performs
// the initial navigation based on the current browser URL.

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  // Add RouterModule to exports so that the components in the companion module (declarations) have access to Router declarables such as RouterLink and RouterOutlet.
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
