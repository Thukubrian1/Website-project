import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';

// import { HeroComponent } from './hero/hero.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { MissionComponent } from './mission/mission.component';
// import { FooterComponent } from './footer/footer.component';
// import { WhatwedoComponent } from './whatwedo/whatwedo.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'landing', component:LandingComponent},
  {path: 'header', component:HeaderComponent},
  // {path: 'hero', component:HeroComponent},
  // {path: 'aboutus', component:AboutusComponent},
  // { path: 'mission', component:MissionComponent},
  // {path: 'footer', component:FooterComponent},
  // {path: 'whatwedo', component:WhatwedoComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full' },
  {path: '**', component:PageNotFoundComponent } // Redirect any unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
