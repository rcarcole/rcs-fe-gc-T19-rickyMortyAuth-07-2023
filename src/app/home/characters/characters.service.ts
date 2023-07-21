import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  getAllCharacters(): Observable<any> {
    
    return this.http.get<any>("http://localhost:3000/characters");
  }

  constructor(private http:HttpClient) { }

  newCharacter(character: any) {
    console.log(character);
    return this.http.post<any>("http://localhost:3000/characters", character);
  }

  deleteCharacter(id: number) {
    return this.http.delete<any>("http://localhost:3000/characters/" + id);
  }

  updateCharacter(character: any) {
    return this.http.put<any>("http://localhost:3000/characters/" + character.id, character);
  }

}
