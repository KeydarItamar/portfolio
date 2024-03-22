import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkService {

  private isDarkMode: boolean = false;
  headerElement = document.getElementById('app-header');

  constructor() { }

  DarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      this.headerElement?.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode');
      this.headerElement?.classList.remove('dark-mode')
      }
  }



}
