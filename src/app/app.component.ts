import { Component } from '@angular/core';
import { NgbModal, NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

const characters = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "location": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "origin": "Citadel of Ricks",
    "location": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth (Replacement Dimension)",
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  },
  {
    "id": 4,
    "name": "Beth Smith",
    "status": "Dead",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth (Replacement Dimension)",
    "location": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
  },
  {
    "id": 5,
    "name": "Jerry Smith",
    "status": "Dead",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth (Replacement Dimension)",
    "location": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbTypeaheadConfig],
})
export class AppComponent {

  activeNavItem: number = 1;

  setActiveNavItem(navItem: number) {
    this.activeNavItem = navItem;}
  public model: any;

	constructor(config: NgbTypeaheadConfig) {
		config.showHint = true;
	}

	search = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : characters.splice(0, 10),
			),
		);
}