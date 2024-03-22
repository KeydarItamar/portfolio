import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './moduls/header/header.component';
import { HomeComponent } from './moduls/home/home.component';
import { AboutmeComponent } from './moduls/aboutme/aboutme.component';
import { ProjectsComponent } from './moduls/projects/projects.component';
import { IaAskmeComponent } from './moduls/ia-askme/ia-askme.component';
import { ContactComponent } from './moduls/contact/contact.component';
import { Project1Component } from './moduls/Crypto/project1.component';
import { HackatonComponent } from './moduls/hackaton/hackaton.component';
import { PokeapiComponent } from './moduls/pokeapi/pokeapi.component';
import { FormsModule } from '@angular/forms';
import { TablasComponent } from './moduls/tablas/tablas.component';
import { KeyboardComponent } from './moduls/keyboard/keyboard.component';
import { TrendsComponent } from './moduls/trends/trends.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    IaAskmeComponent,
    ContactComponent,
    Project1Component,
    HackatonComponent,
    PokeapiComponent,
    TablasComponent,
    KeyboardComponent,
    TrendsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
