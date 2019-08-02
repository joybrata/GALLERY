import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component'; //first created side nav bar
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent, DemoNumber } from './artists/artists.component';
import { AboutComponent } from './about/about.component';

import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { ArttistListContainerComponent } from './arttist-list-container/arttist-list-container.component';
import { ArtistService } from './artist.service';
import { ArtViewComponent } from './art-view/art-view.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ArtistsComponent,
    AboutComponent,
    DemoNumber,
    ArttistListContainerComponent,
    ArtViewComponent,
    ArtistViewComponent,
    //SideNavBarComponent  //first created side nav bar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
