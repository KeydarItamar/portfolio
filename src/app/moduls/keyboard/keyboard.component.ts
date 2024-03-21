import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  keys = [
    { keyCode: 65, key: 'A', sound: 'CLAP' },
    { keyCode: 83, key: 'S', sound: 'HIHAT' },
    { keyCode: 68, key: 'D', sound: 'KICK' },
    { keyCode: 70, key: 'F', sound: 'OPENHAT' },
    { keyCode: 71, key: 'G', sound: 'BOOM' },
    { keyCode: 72, key: 'H', sound: 'RIDE' },
    { keyCode: 74, key: 'J', sound: 'SNARE' },
    { keyCode: 75, key: 'K', sound: 'TOM' },
    { keyCode: 76, key: 'L', sound: 'TINK' },
    { keyCode: 90, key: 'Z', sound: 'DO' },
    { keyCode: 88, key: 'X', sound: 'RE' },
    { keyCode: 67, key: 'C', sound: 'MI' },
    { keyCode: 86, key: 'V', sound: 'FA' },
    { keyCode: 66, key: 'B', sound: 'SOL' },
    { keyCode: 78, key: 'N', sound: 'LA' },
    { keyCode: 77, key: 'M', sound: 'SI' }
  ];

  constructor() {
    window.addEventListener('keydown', this.playSound.bind(this));
  }

  playSound(e: KeyboardEvent): void {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`) as HTMLAudioElement;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`) as HTMLElement;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    setTimeout(() => {
      key.classList.remove('playing');
    }, 100);
  }
  ngOnInit(): void {
      
  }

}
