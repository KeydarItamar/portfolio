import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {
  pokemonList: any[] = [];
  @ViewChild('numInput', {static: true}) numInput!: ElementRef;
  urlImagenPokemon: string = ''
  urlspritePokemon: string = ''
  urlspriteBackPokemon: string = ''
  num: number = 25

  obtenerValor() {
    this.num = this.numInput.nativeElement.value;
    console.log(this.num);
    console.log(this.urlImagenPokemon)
    this.urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.num}.png`
    this.urlspritePokemon =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.num}.png`

  }
 
  constructor(private pokeapiService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

 

  getPokemonList() {
    this.pokeapiService.getPokemonList(10, 0).subscribe({
        next: (response: any) => {
          this.pokemonList = response['name'];
        },
        error: error => {
          console.error('Error fetching Pokemon list:', error);
        }
  });
  }
  
}
