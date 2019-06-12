import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
