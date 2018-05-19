import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { ArtistsDetailsComponent } from './artists-details/artists-details.component';
import { AppServiceService } from './app-service.service';
import { HttpModule, ConnectionBackend } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    ArtistsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AppServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
