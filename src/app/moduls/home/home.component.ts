import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {

  }
  descargarDocumento(){
    const pdfUrl = 'assets/data/Itamar Keydar.pdf';
    window.open(pdfUrl, '_blank');
  }

  constructor() {}

 
 
}
