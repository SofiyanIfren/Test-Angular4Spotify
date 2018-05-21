import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  myToken: string;
  myArtist: string;

  artistsNumber: JSON;
  albumsNumber: JSON;

  constructor(private appService: AppServiceService) { 
  }

  // Fonction appelée lors de la validation du formulaire :  
  // récupération des données et initialisation des variables globales 
  onValidate(form: NgForm){
    this.myToken = form.value.token;
    this.myArtist = form.value.artist;

    // Appel au service (Controller) avec les valeurs du formulaire
    this.appService.searchArtist(this.myToken, this.myArtist, 'artist').subscribe(response => {
      // on donne à la variable accessible depuis le template le nombre d'items de la recherche
      this.artistsNumber = response.artists.items; 
    });
  }

  // TODO : Afficher les albums de l'artiste sélectionné dans un nouveau composant
  goToInformations(id: string){
    let token = this.myToken;

    // Appel au service (Controller) avec l'identifiant de l'artiste sélectionné
    this.appService.getArtist(token, id).subscribe(response => {
      // on donne à la variable accessible depuis le template le nombre d'items de la recherche
      this.albumsNumber = response.items; 
    })

  }

  ngOnInit() {
  }

}
