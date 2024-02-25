import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
proyectos: string[]= ['Proyecto 1', 'Proyecto 2','Proyecto 3','Proyecto 4','Proyecto 5']
  constructor() { }

  ngOnInit(): void {
  }

}
