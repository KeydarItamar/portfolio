import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project1Component } from './moduls/project1/project1.component';

const routes: Routes = [
  {path: 'Proyecto 1', component: Project1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
