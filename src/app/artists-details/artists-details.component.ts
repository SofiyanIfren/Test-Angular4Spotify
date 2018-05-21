import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { SearchComponent } from '../search/search.component';
import { JSONPBackend } from '@angular/http';

@Component({
  selector: 'app-artists-details',
  templateUrl: './artists-details.component.html',
  styleUrls: ['./artists-details.component.css']
})
export class ArtistsDetailsComponent implements OnInit {

  itemsNumber: JSON;

  constructor(private appService: AppServiceService, searchComponent: SearchComponent) {
    // TODO : récupérer les valeurs du formulaire afin de les stocker dans les variables adéquates et "reconstruire" la classe pour afficher le resultat de la requete
    let token = 'BQBk3DuvsvnKw3nalH4cubXC3AFyE14pjO1qvk7Wr9hHXjdAlZkjlMYGBnh8pI4XOEgnDahvNBzqJmP3j4feUD0QHJLtlX8Ts4p3SoFGChfw5NqftR7ka55x6PvNkPKidmkNqzFED7adKE2u__JZaG0tAXA3uc4';
    let artist = 'Michael'
    this.appService.searchArtist(token, artist, 'artist').subscribe(response => {
      // affichage du json dans la console pour travailler
      console.log(response.artists);
      // on donne à la variable accessible depuis le template le nombre d'items de la recherche
      this.itemsNumber = response.artists.items; 
    });
  } 

  // TODO : Afficher les détails de l'artiste sélectionné dans un nouveau composant
  goToDetails(id: string){

  }

  ngOnInit() {
  }

}
