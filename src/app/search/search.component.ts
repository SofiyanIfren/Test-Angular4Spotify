import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myToken: string;
  myArtist: string;

  constructor() { 
  }

// Fonction appelée lors de la validation du formulaire :  récupération des données et initialisation des variables globales 
onValidate(form: NgForm){
  this.myToken = form.value.token;
  this.myArtist = form.value.artist;
  console.log(this.myToken);
  console.log(this.myArtist);
}

  ngOnInit() {
  }

}
