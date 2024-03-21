import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DarkService } from 'src/app/dark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {

  }
  descargarDocumento(){

  }

  constructor(private elementRef: ElementRef) {}

 
 
}
