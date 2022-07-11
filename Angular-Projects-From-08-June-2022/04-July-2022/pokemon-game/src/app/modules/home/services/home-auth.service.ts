import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemon } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeAuthService {

  constructor(private http: HttpClient) { }

  private getToken() {
    return localStorage.getItem('_token');
  }

  getPokemons() {
    return this.http.get('pokemon');
  }

  createPokemon(pokeData: IPokemon) {
    return this.http.post('pokemon', pokeData, { headers: { message: 'creating pokemon' } });
  }

  updatePokemon(pokeData: IPokemon) {
    return this.http.put('pokemon', pokeData, { headers: { message: 'pokemon update' } });
  }

  deletePokemon(id: string) {
    return this.http.delete(`pokemon/${id}`, { headers: { message: 'pokemon deletion' } });
  }

  logOut() {
    localStorage.removeItem('_token');
  }

}
