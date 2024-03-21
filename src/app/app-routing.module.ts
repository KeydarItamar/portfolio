import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project1Component } from './moduls/Crypto/project1.component';
import { HackatonComponent } from './moduls/hackaton/hackaton.component';
import { PokeapiComponent } from './moduls/pokeapi/pokeapi.component';
import { TablasComponent } from './moduls/tablas/tablas.component';
import { KeyboardComponent } from './moduls/keyboard/keyboard.component';
import { TrendsComponent } from './moduls/trends/trends.component';
const routes: Routes = [
  {path: '', component: PokeapiComponent},
  {path: 'MWC2024 Hackaton', component: HackatonComponent},
  {path: 'Apires Crypto', component: Project1Component},
  {path: 'Pokeapi',component: PokeapiComponent},
  {path: 'Tables', component: TablasComponent},
  {path: 'Keyboard', component: KeyboardComponent},
  {path: 'Google trends', component: TrendsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
