import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iartist } from './artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private _url: string = "/assets/database/database.json";

  constructor(private http: HttpClient) { }

  getAtrists(): Observable<Iartist[]> {
    return this.http.get<Iartist[]>(this._url);
  }
}
