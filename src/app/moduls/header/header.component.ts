import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DarkService } from 'src/app/dark.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
activeTab: string = 'Home';
modulos: string[] = ['Home', 'About me', 'Projects', 'Ia ask me', 'Contact', ]
backgroundColor: string = '#fff';
fontColor: string = '#1f1f1f'
underlineColor: string = '#1f1f1f';
// colorLi = document.getElementById('lista');


constructor(private el: ElementRef, private dark: DarkService ) {}

setActiveTab(tab: string) {
  this.activeTab = tab;
}

scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  this.setActiveTab(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


DarkMode(){
  this.dark.DarkMode()
  if(this.backgroundColor =='#fff' ){
    this.backgroundColor = '#1f1f1f';
    this.fontColor= '#fff';
    this.el.nativeElement.style.setProperty('--underline-color', '#fff');
    
  }else{
    this.backgroundColor = '#fff';
    this.fontColor= '#1f1f1f'
    this.el.nativeElement.style.setProperty('--underline-color', '#1f1f1f');  }
  
}





  ngOnInit(): void {
    this.el.nativeElement.style.setProperty('--underline-color', '#1f1f1f');
  }

}
