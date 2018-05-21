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

  constructor(private appService: AppServiceService, private searchComponent: SearchComponent) {
    // TODO : récupérer les valeurs du formulaire afin de les stocker dans les variables adéquates et "reconstruire" la classe pour afficher le resultat de la requete
    let token = 'BQCCwyAXbW0FL6JkKDA0eyefJcZnFoV3WQn-gCB8jtI3igqaLvFzCRzM9r5fKnthE2SdSNOGyg1knKyGiX9ogAYx2USYa6KjegIQV96t5bsgIKpZR2I3-AGO3OhiB3cWNo0S0TxaP9ZoEamvmLi5JZpkUa9lyBE';
    let artist = 'Michael'
    this.appService.searchArtist(token, artist, 'artist').subscribe(response => {
      // affichage du json dans la console pour travailler
      console.log(response.artists);
      // on donne à la variable accessible depuis le template le nombre d'items de la recherche
      this.itemsNumber = response.artists.items; 
    });
  } 

  // TODO : Afficher les albums de l'artiste sélectionné dans un nouveau composant
  goToDetails(id: string){
    let token = 'BQCCwyAXbW0FL6JkKDA0eyefJcZnFoV3WQn-gCB8jtI3igqaLvFzCRzM9r5fKnthE2SdSNOGyg1knKyGiX9ogAYx2USYa6KjegIQV96t5bsgIKpZR2I3-AGO3OhiB3cWNo0S0TxaP9ZoEamvmLi5JZpkUa9lyBE';
    this.appService.getArtist(token, id).subscribe(response => {
      // Implémenter un Observable ici et un Observer sur le component d'affichage
      console.log(response);
    })

  }

  ngOnInit() {
    
  }

}
