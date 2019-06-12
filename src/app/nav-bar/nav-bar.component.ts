import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  homeSelected: boolean = true;
  artistsSelected: boolean = false;
  aboutSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectedFunction(x: number) {
    this.homeSelected = false;
    this.artistsSelected = false;
    this.aboutSelected = false;
    console.log('clicked');
    console.log(x);
    switch (x) {
      case 1: {
        this.homeSelected = true;
        break;
      }
      case 2: {
        this.artistsSelected = true;
        break;
      }
      case 3: {
        this.aboutSelected = true;
        break;
      }
      default: {
        console.log('Default Case selected in switch case');
      }
    }
  }
}
