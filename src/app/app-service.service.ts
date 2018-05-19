import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl:string;
  private albumUrl:string;
  
  constructor(private _http:Http){
      
  }

  searchArtist(str: string, type: string) {
    let headers = new Headers({'Authorization': 'Bearer BQBhnN-NVFsu1fYanasexaMV5SW8atoYoI2yxHvcq21nxENpkA2LD8SYRF5ACbxLlbjd_kMaoMtL2rWo4X82zMZQxd4S6NmSO5G8MtqoA-blWXUZxeg_Pi66HNxdRNE8IVXonJyOmWzmBuL1Dzlr4rSC4ZpCCfU'});
    let options = new RequestOptions({ headers: headers });
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&type=' + type;
    return this._http.get(this.searchUrl, options)
        .map(res => res.json());
  }

  /*
  searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
        .map(res => res.json());
  }

  getArtist(id:string){
      this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
      return this._http.get(this.artistUrl)
          .map(res => res.json());
  }

  getAlbums(artistId:string){
      this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
      return this._http.get(this.albumsUrl)
          .map(res => res.json());
  }

  getAlbum(id:string){
      this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
      return this._http.get(this.albumUrl)
          .map(res => res.json());
  }
  */
}  
