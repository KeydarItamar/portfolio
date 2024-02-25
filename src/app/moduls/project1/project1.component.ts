import { Component, OnInit } from '@angular/core';
import { pokemons } from 'src/app/entities/pokemon';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  
  
  listaPokemons: any[] = []; // Declarar la lista de pokemons

  constructor() { }

  ngOnInit() {
    const pokemonData = new pokemons(); // Crea una instancia de la clase pokemons
    // Itera sobre el array de pokemons y agrega los datos necesarios a listaPokemons
    pokemonData.pokemon.forEach(pokemon => {
      this.listaPokemons.push({
        id: pokemon.id,
        num: pokemon.num,
        name: pokemon.name,
        img: pokemon.img,
        type: pokemon.type,
        height: pokemon.height,
        weight: pokemon.weight,
        weaknesses: pokemon.weaknesses
        // Agrega más propiedades si es necesario
      });
    });
    console.log(pokemonData)
  }

}
