import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button'; 
import { AppComponent } from './app.component';
import { RatingModule } from 'primeng/rating'; 
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table'; 
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { GalleriaModule } from 'primeng/galleria';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component'; 
import { AvatarModule } from 'primeng/avatar'; 
import { MenubarModule } from 'primeng/menubar'; 
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
import { FooterComponent } from './footer/footer.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { ShopComponent } from './shop/shop.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LandingComponent,
    HeaderComponent,
    HeroComponent,
    AboutusComponent,
    MissionComponent,
    FooterComponent,
    WhatwedoComponent,
    ShopComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    TagModule,
    TableModule,
    GalleriaModule,
    AvatarModule,
    MenubarModule,
    BadgeModule,
    CardModule,
    CommonModule,
    SelectButtonModule,
    DataViewModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
