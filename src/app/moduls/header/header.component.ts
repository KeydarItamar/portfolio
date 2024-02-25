import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DarkService } from 'src/app/dark.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
modulos: string[] = ['Home', 'About me', 'Projects', 'Ia ask me', 'Contact']

constructor(private el: ElementRef, private dark: DarkService ) {}

scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
DarkMode(){
  this.dark.DarkMode()
}


  ngOnInit(): void {
  }

}
