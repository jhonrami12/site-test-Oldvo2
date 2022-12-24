import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css'],
})
export class NavbarHomeComponent implements OnInit {
  toggelMenu = 'closed';

  constructor() {}

  ngOnInit(): void {}

  onToggleMenu() {
    //console.log('presionado');
    this.toggelMenu = this.toggelMenu == 'opened' ? 'closed' : 'opened';
  }
}
