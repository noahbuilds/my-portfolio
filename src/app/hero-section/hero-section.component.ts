import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  greetMsg: string = '';
  toolsBox: Array<string> = ['html','css','js-official','typescript-logo','material-ui','bootstrap','tailwindcss-icon','angular','nodejs-logo','express','mongo','postgresql']
  constructor() {}

  ngOnInit(): void {
    this.greeter();
  }

  greeter(): string {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (hours >= 0 && hours <= 11 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good Morning');
    }
    if (hours >= 12 && hours <= 15 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good Afternoon');
    }
    if (hours >= 16 && hours <= 23 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good Evening');
    }
    return '';
  }
}
