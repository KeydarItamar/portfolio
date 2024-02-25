import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkService {

  private isDarkMode: boolean = false;

  constructor() { }

  DarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
