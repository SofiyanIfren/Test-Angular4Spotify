import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { AppServiceService } from './services/app-service.service';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppServiceService,
    SearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
