import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//imports mios extras:
//*****************************************+ */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './moduls/header/header.component';
import { HomeComponent } from './moduls/home/home.component';
import { AboutmeComponent } from './moduls/aboutme/aboutme.component';
import { ProjectsComponent } from './moduls/projects/projects.component';
import { IaAskmeComponent } from './moduls/ia-askme/ia-askme.component';
import { ContactComponent } from './moduls/contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    IaAskmeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
