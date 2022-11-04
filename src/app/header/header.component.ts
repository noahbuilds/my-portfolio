import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMobileNav: boolean = false;

  navList:Array<any> = [
    {name:'Home', link:'/'},
    {name:'About', link:'/#about'},
    {name:'Projects', link:'/#projects'},
    {name:'Résumé', link:'/#'},
  ]
  constructor() {}

  ngOnInit(): void {
    console.log(this.navList[0].name)
  }

  toggleMobileMenu() {
    this.showMobileNav = !this.showMobileNav;
  }

}
