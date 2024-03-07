import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackaton',
  templateUrl: './hackaton.component.html',
  styleUrls: ['./hackaton.component.css']
})
export class HackatonComponent implements OnInit {
  
  videoSrc = '../../../assets/data/video.mp4';

  constructor() { 
  }

  ngOnInit(): void {
      
  }

}
