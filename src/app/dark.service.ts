import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkService {

  private isDarkMode: boolean = false;
  headerElement = document.getElementById('app-header');
  private imageColor: string = 'black'; 

  constructor() { }

  DarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      this.headerElement?.classList.add('dark-mode')
      this.setImageColor('white')
    } else {
      document.body.classList.remove('dark-mode');
      this.headerElement?.classList.remove('dark-mode')
      this.setImageColor('black')
    }
  }

  setImageColor(color: string) {
    this.imageColor = color;
  }

  getImageColor(): string {
    return this.imageColor;
  }

}
