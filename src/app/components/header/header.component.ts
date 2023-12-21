import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMobileNav: boolean = false;
  currentUrl: string = '';

  navList: Array<any> = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    // {name:'Projects', link:'/#projects'},
    {
      name: 'Résumé',
      link: 'https://drive.google.com/file/d/1WI-gStJBZgddMLvD96ObLxGZjCPmL6SJ/view?usp=sharing',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

  toggleMobileMenu() {
    this.showMobileNav = !this.showMobileNav;
  }
}
