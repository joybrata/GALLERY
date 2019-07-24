import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  ch = String.fromCharCode(65);

  constructor() { }

  ngOnInit() {
  }

}

@Pipe({name: 'demoNumber'})
export class DemoNumber implements PipeTransform {
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push(String.fromCharCode(i + 65));
      }
      return res;
  }
}
