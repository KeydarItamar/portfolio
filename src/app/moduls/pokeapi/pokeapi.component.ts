import { Component, OnInit, AfterViewInit ,OnDestroy } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonClient } from 'pokenode-ts';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {
  pokemonList: any[] = [];
  @ViewChild('numInput', {static: true}) numInput!: ElementRef;
  urlImagenPokemon: string = ''
  urlspritePokemon: string [] = []
  urlspriteBackPokemon: string = ''
  num: number = 25
  name: string = ''
  pokemon: string [] = []
  pokemonStats: any[] = [];
  pokemonAbilities: any[] = [];
  listaPokemons:string[] =[];
  pokemonName: string = '';
  pokemonHeight:string = '';
  pokemonWeight: string = '';
  pokemonTypes: string[] =[];
  sprites= '';
  pokemoDesc: string = ''
  chartOptions ={}
  ctx = document.getElementById('myChart');
  private myChart: Chart | undefined;


  obtenerValor() {
    this.num = this.numInput.nativeElement.value;
    this.getPokemon(this.num)
    this.getChar(this.num)
    this.urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.num}.png`
    this.urlspritePokemon =[
                     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.num}.png`,
                     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.num}.png`,
                     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${this.num}.png`,
                     `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.num}.png`,
                      ]

  }
  constructor(private pokeapiService: PokemonService, private http: HttpClient) {
 
   }

  ngOnInit(): void {
    this.obtenerValor()
  }

  getPokemon(num: number): void {
    
    const pokemonNumber = num; 
    this.pokeapiService.getPokemonByNum(pokemonNumber).subscribe((data: any) => {
      this.pokemon = data;
      this.pokemonStats = data.stats
      this.pokemonAbilities = data.abilities
      this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      this.pokemonWeight = data.weight
      this.pokemonHeight = data.height
      this.pokemonTypes = data.types.map((type: any) => type.type.name);
      this.sprites = data.sprites.front_default;
      this.crearGrafica()
    });
  }
  getChar(num:number):void{
    const pokemonNumber = num; 
    this.pokeapiService.getPokemonChar(pokemonNumber).subscribe((data: any) => {
      this.pokemoDesc = data.descriptions[7].description
      
    });
  
  }

  getName(){
    this.name = this.numInput.nativeElement.value;
    this.pokeapiService.getPokemonByName(this.name).subscribe((data: any) => {
      this.num = data.order
      console.log( 'resulado de sacar el numero del service: ' + this.num )
      return this.num
    });
 }




  crearGrafica(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (this.myChart) {
      this.myChart.destroy();
    }
    this.myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Hp', 'Attack', 'Defense', 'Sp-Attack', 'Sp-Deffense', 'Speed'],
        datasets: [{
          label: 'Stats',
          data: [ this.pokemonStats[0].base_stat,this.pokemonStats[1].base_stat, this.pokemonStats[2].base_stat,
          this.pokemonStats[3].base_stat, this.pokemonStats[4].base_stat, this.pokemonStats[5].base_stat],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  
  ngOnDestroy(): void {
    if (this.myChart) {
      this.myChart.destroy();
    }
  }



}
  

