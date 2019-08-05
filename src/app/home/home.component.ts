import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('pageAnimation', [
  //     transition(':enter', [
  //       query('.thumbnail', [
  //         style({opacity: 0, transform: 'translateY(-100px)'}),
  //         stagger(-30, [
  //           animate('5000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
  //         ])
  //       ])
  //     ])
  //   ]),
  // ]
})
export class HomeComponent implements OnInit {

  // @HostBinding('@pageAnimation')
  public artist_data = [];


  constructor(private _artistService: ArtistService, private nextRouter: Router) { }

  ngOnInit() {
    this._artistService.getAtrists()
      .subscribe(data => this.artist_data = data);
  }

  onSelectArt(art) {
    this.nextRouter.navigate(['/artView', art.art_name]);
  }
}
