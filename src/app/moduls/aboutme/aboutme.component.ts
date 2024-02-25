import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  description: string = 'Hola, soy Itamar, un apasionado del desarrollo web con antecedentes en Filosofía. Me considero una persona responsable y rápida para aprender. Actualmente, estoy enfocado en el desarrollo web, donde aplico mi pensamiento lógico y creativo para resolver problemas de manera innovadora. ¡Listo para nuevos desafíos y oportunidades de aprendizaje';
  profilePicture: string = 'ruta/a/tu/foto.jpg';
  skills: string[] = ['Angular', 'HTML', 'CSS', 'JavaScript'];
  socialLinks: { name: string, url: string }[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { name: 'GitHub', url: 'https://github.com/' },
  ];

}
