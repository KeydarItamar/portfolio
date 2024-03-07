import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
proyectos: string[]= ['MWC2024 Hackaton', 'Apires Crypto','Pokeapi','Proyecto 4','Proyecto 5']
  constructor() { }

  ngOnInit(): void {
  }

}
