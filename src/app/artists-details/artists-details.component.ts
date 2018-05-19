import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Artist } from '../models/artist'
import { JSONPBackend } from '@angular/http';

@Component({
  selector: 'app-artists-details',
  templateUrl: './artists-details.component.html',
  styleUrls: ['./artists-details.component.css']
})
export class ArtistsDetailsComponent implements OnInit {

  response: JSON;

  constructor(private appService: AppServiceService) {
    appService.searchArtist('michael', 'artist').subscribe(response => {
      this.response = response;
      let responseTxt = JSON.parse(response);
      console.log(responseTxt);
    });
   }

  ngOnInit() {
  }

}
