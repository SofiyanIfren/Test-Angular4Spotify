import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { ArtistsDetailsComponent } from './artists-details/artists-details.component';
import { AppServiceService } from './services/app-service.service';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ArtistInformationsComponent } from './artist-informations/artist-informations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    ArtistsDetailsComponent,
    ArtistInformationsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppServiceService,
    ArtistsDetailsComponent,
    SearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
