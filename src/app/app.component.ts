import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SearchComponent} from './search/search.component';
import {AppServiceService} from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
