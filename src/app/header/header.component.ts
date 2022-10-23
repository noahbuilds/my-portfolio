import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMobileNav: boolean= false
  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu(){
    this.showMobileNav = !this.showMobileNav
    console.log("Open Mobile menu yeah yeah")
  }

}
