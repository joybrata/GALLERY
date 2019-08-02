import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arttist-list-container',
  templateUrl: './arttist-list-container.component.html',
  styleUrls: ['./arttist-list-container.component.scss']
})
export class ArttistListContainerComponent implements OnInit {

  @Input() serKey: string;

  public artist_data = [];

  filterItemsOfType(serKey){
    return this.artist_data.filter(x => x.artist_name.startsWith(serKey));
  }

  constructor(private _artistService: ArtistService, private router: Router) { }

  ngOnInit() {
    this._artistService.getAtrists()
      .subscribe(data => this.artist_data = data);
  }

  onSelectArtist(artist) {
    this.router.navigate(['/artistView', artist.artist_name]);
  }
}
