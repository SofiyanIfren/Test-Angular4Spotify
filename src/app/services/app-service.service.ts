import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl:string;
  private albumUrl:string;
  
  constructor(private http:Http){
      
  }

  // Fonction encapsulée de recherche d'un artiste en fonction de trois paramètres
  searchArtist(token: string, str: string, type: string) {
    let headers = new Headers({'Authorization': 'Bearer ' + token});
    let options = new RequestOptions({ headers: headers });
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&type=' + type;
    return this.http.get(this.searchUrl, options)
        .map(res => res.json());
  }

  // Fonction servant à afficher les albums d'un artiste sélectionné
  getArtist(token: string, id:string){
    let headers = new Headers({'Authorization': 'Bearer ' + token});
    let options = new RequestOptions({ headers: headers });
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums';
    return this.http.get(this.artistUrl, options)
        .map(res => res.json());
  }

}  
