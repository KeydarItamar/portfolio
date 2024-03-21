import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, Renderer2,  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor() { }

  keywords: string[] = [];

  numbers: number[] = [1, 2, 3, 4, 5];

  currentNumber: number = 1;

  increasing: boolean = true;

  ngOnInit(): void {
    this.keywords[0]= 'Dogs'
    this.embedGoogleTrends();
  }

  changeCurrentNumber() {

    if (this.increasing) {
      this.currentNumber++;
      if (this.currentNumber === 5) this.increasing = false;
    }
    else {
      this.currentNumber--;
      this.keywords.pop();
      if (this.currentNumber === 1) this.increasing = true;
    }

  }

  embedGoogleTrends() {

    console.log(this.keywords);

    if (this.keywords.some(kw => kw == undefined) || this.keywords.length === 0) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://ssl.gstatic.com/trends_nrtr/3620_RC01/embed_loader.js';
    script.async = true;
    script.onload = () => this.renderTrendsCharts();
    document.body.appendChild(script);
  }

  renderTrendsCharts() {
    this.renderTrendsWidget();
    this.renderRegionChart();
    // this.renderRelatedTopics();
  }

  // renderRelatedTopics() {

  //   const relatedTopicsChart = document.getElementById('related-topics') as HTMLElement;

  //   relatedTopicsChart.innerHTML = "";

  //   (window as any).trends.embed.renderExploreWidgetTo(
  //     relatedTopicsChart,
  //     'RELATED_TOPICS',
  //     {
  //       comparisonItem: [{ keyword: this.keyword, geo: '', time: 'today 12-m' }],
  //       category: 0,
  //       property: '',
  //     },
  //     {
  //       exploreQuery: 'q=dbs%20bank&date=today 12-m',
  //       guestPath: 'https://trends.google.com:443/trends/embed/',
  //     },
  //   );
  // }

  renderRegionChart() {

    const trendsBarChart = document.getElementById('trends-bar-chart') as HTMLElement;

    trendsBarChart.innerHTML = "";

    (window as any).trends.embed.renderExploreWidgetTo(
      trendsBarChart,
      'GEO_MAP',
      {
        comparisonItem: this.keywords.map(keyword => ({ keyword: keyword, geo: '', time: 'today 12-m' })),
        category: 0,
        property: '',
      },
      {
        exploreQuery: 'q=dbs%20bank&date=today 12-m',
        guestPath: 'https://trends.google.com:443/trends/embed/',
      },
    );
  }

  renderTrendsWidget() {
    const trendsGraph = document.getElementById('trends-graph') as HTMLElement;

    trendsGraph.innerHTML = "";

    (window as any).trends.embed.renderExploreWidgetTo(
      trendsGraph,
      'TIMESERIES',
      {
        // comparisonItem: [{ keyword: this.keyword, geo: '', time: 'today 12-m' }],
        comparisonItem: this.keywords.map(keyword => ({ keyword: keyword, geo: '', time: 'today 12-m' })),
        category: 0,
        property: '',
      },
      {
        exploreQuery: 'q=dbs%20bank&date=today 12-m',
        guestPath: 'https://trends.google.com:443/trends/embed/',
      },
    );
  }
}
