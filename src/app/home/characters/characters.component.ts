import { Component, Input } from '@angular/core';
// import * as database from '../../database.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from '../detalle/detalle.component';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],

})
export class CharactersComponent {

  isUpdate: boolean = false;
  id : number = 0;
  name : string = '';
  status : string = '';
  species : string = '';
  gender : string = '';
  origin : string = '';
  location : string = '';
  image : string = '';
  

  characters : any = [];
  constructor(private modalService: NgbModal, private characterService: CharactersService) {
    this.characterService.getAllCharacters().subscribe((data: any) => {
      this.characters = data;
    });
  }

	open(character: any) {
		const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.character = character;
	}

  newCharacter() {
    let character = {
      name: this.name,
      status: this.status,
      species: this.species,
      gender: this.gender,
      origin: this.origin,
      location: this.location,
      image: this.image
    };

    this.characterService.newCharacter(character).subscribe((data: any) => {
      this.characters.push(data);
    });
    this.reset();
  }

  reset(){
    this.id = 0;
    this.name = '';
    this.status = '';
    this.species = '';
    this.gender = '';
    this.origin = '';
    this.location = '';
    this.image = '';
  };

  deleteCharacter(id: number) {
    this.characterService.deleteCharacter(id).subscribe((data: any) => {
      this.characters = this.characters.filter((character: any) => character.id != id);
    });
  }

  updateCharacter() {
    let character = {
      id: this.id,
      name: this.name,
      status: this.status,
      species: this.species,
      gender: this.gender,
      origin: this.origin,
      location: this.location,
      image: this.image
    };


    this.characterService.updateCharacter(character).subscribe((data: any) => {
      this.characters = this.characters.map((character: any) => {
        if (character.id == data.id) {
          character = data;
        }
        return character;
      });
    });
    this.reset();
    this.isUpdate = false;
  }

  getCharacter(character: any) {
    this.id = character.id;
    this.name = character.name,
    this.status = character.status,
    this.species = character.species,
    this.gender = character.gender,
    this.origin = character.origin,
    this.location = character.location,
    this.image = character.image,
    this.isUpdate = true;
  }

}