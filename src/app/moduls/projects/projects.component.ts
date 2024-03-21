import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
proyectos: string[]= ['Pokeapi','MWC2024 Hackaton', 'Apires Crypto','Keyboard','Google trends']
  constructor() { }

  ngOnInit(): void {
  }

  selectedProyecto: string | null = 'Pokeapi';

  selectProyecto(proyecto: string) {
    this.selectedProyecto = proyecto;
  }

}
