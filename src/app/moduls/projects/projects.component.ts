import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
proyectos: string[]= ['Apirest Crypto','Google trends','MWC2024 Hackaton','Pokeapi','Keyboard',]
  constructor() { }

  ngOnInit(): void {
  }

  selectedProyecto: string | null = 'Apirest Crypto';

  selectProyecto(proyecto: string) {
    this.selectedProyecto = proyecto;
  }

}
