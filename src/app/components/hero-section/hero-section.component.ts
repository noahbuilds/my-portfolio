import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  greetMsg: string = '';
  showIframe: boolean = false;
  toolsBox: Array<string> = [
    'html',
    'css',
    'js-official',
    'typescript-logo',
    'python',
    'material-ui',
    'bootstrap',
    'tailwindcss-icon',
    'react-javascript-js-framework-facebook',
    'nextjs',
    'angular',
    'nodejs-logo',
    'nestjs',
    'express',
    'mongo',
    'postgresql',
    'docker',
    'kubernetes',
  ];
  constructor() {}

  ngOnInit(): string {
    return this.greeter();
  }

  greeter(): string {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (hours >= 0 && hours <= 11 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good morning');
    }
    if (hours >= 12 && hours <= 15 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good afternoon');
    }
    if (hours >= 16 && hours <= 23 && minutes >= 0 && minutes <= 59) {
      return (this.greetMsg = 'Good evening');
    }
    return '';
  }
}
