import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.css'],
})
export class WelcomeHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //this.initAnimations();
  }
}
