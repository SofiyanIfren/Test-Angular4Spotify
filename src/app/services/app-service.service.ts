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

  /*
  // TOUSE : Fonction à utiliser afin d'afficher les détails d'un artiste sélectionné
  getArtist(id:string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
      return this.http.get(this.artistUrl)
          .map(res => res.json());
  }
  */
}  
