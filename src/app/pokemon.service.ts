import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://pokeapi.co/api/v2';
  
  getPokemonByNum(num: number) {
    return this.http.get(`${this.apiUrl}/pokemon/${num}`);
  }

  getPokemonList(limit: number, offset: number) {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }
  getPokemonChar(num: number) {
    return this.http.get(`${this.apiUrl}/characteristic/${num}`);
  }

  getPokemonByName(name: string) {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }

}
