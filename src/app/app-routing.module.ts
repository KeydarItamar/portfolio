import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project1Component } from './moduls/Crypto/project1.component';
import { HackatonComponent } from './moduls/hackaton/hackaton.component';
import { PokeapiComponent } from './moduls/pokeapi/pokeapi.component';
const routes: Routes = [
  {path: '', component: HackatonComponent},
  {path: 'MWC2024 Hackaton', component: HackatonComponent},
  {path: 'Apires Crypto', component: Project1Component},
  {path: 'Pokeapi',component: PokeapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
