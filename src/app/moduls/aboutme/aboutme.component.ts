import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  hovered= false
  constructor() { }

  ngOnInit(): void {
  }
  expandedCard: string = '';

  expandCard(card: string): void {
    this.expandedCard = card;
  }

  collapseCards(): void {
    this.expandedCard = '';
  }


 

}
