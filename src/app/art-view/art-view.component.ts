import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-view',
  templateUrl: './art-view.component.html',
  styleUrls: ['./art-view.component.scss']
})
export class ArtViewComponent implements OnInit {
  public art_name;
  public artist_data = [];

  constructor(private _artistService: ArtistService, private router: ActivatedRoute) { }

  ngOnInit() {
    this._artistService.getAtrists()
      .subscribe(data => this.artist_data = data);

    let artName = this.router.snapshot.paramMap.get('id');
    this.art_name = artName;
  }

}
