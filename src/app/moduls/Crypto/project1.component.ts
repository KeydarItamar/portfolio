import { Component, OnInit } from '@angular/core';
import { pokemons } from 'src/app/entities/pokemon';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  resultados: any[] = [];
  resultadoExiste: boolean = false

  Criptomonedas = [
    {"nombre": "Bitcoin", "sigla": "BTC", "precio": 45000, "volumen_24h": 12000000000, "cap_mercado": 850000000000},
    {"nombre": "Ethereum", "sigla": "ETH", "precio": 3500, "volumen_24h": 8000000000, "cap_mercado": 400000000000},
    {"nombre": "Binance Coin", "sigla": "BNB", "precio": 400, "volumen_24h": 1500000000, "cap_mercado": 60000000000},
    {"nombre": "Cardano", "sigla": "ADA", "precio": 2.5, "volumen_24h": 500000000, "cap_mercado": 80000000000},
    {"nombre": "XRP", "sigla": "XRP", "precio": 1.2, "volumen_24h": 700000000, "cap_mercado": 55000000000},
    {"nombre": "Solana", "sigla": "SOL", "precio": 150, "volumen_24h": 300000000, "cap_mercado": 45000000000},
    {"nombre": "Polkadot", "sigla": "DOT", "precio": 30, "volumen_24h": 600000000, "cap_mercado": 30000000000},
    {"nombre": "Dogecoin", "sigla": "DOGE", "precio": 0.3, "volumen_24h": 2000000000, "cap_mercado": 25000000000},
    {"nombre": "Avalanche", "sigla": "AVAX", "precio": 60, "volumen_24h": 400000000, "cap_mercado": 20000000000},
    {"nombre": "Chainlink", "sigla": "LINK", "precio": 25, "volumen_24h": 800000000, "cap_mercado": 18000000000},
    {"nombre": "Litecoin", "sigla": "LTC", "precio": 150, "volumen_24h": 300000000, "cap_mercado": 16000000000},
    {"nombre": "Bitcoin Cash", "sigla": "BCH", "precio": 500, "volumen_24h": 400000000, "cap_mercado": 15000000000},
    {"nombre": "Stellar", "sigla": "XLM", "precio": 0.8, "volumen_24h": 1000000000, "cap_mercado": 12000000000},
    {"nombre": "EOS", "sigla": "EOS", "precio": 5, "volumen_24h": 500000000, "cap_mercado": 10000000000},
    {"nombre": "Tezos", "sigla": "XTZ", "precio": 8, "volumen_24h": 200000000, "cap_mercado": 9000000000},
    {"nombre": "Tron", "sigla": "TRX", "precio": 0.05, "volumen_24h": 1200000000, "cap_mercado": 8000000000},
    {"nombre": "Monero", "sigla": "XMR", "precio": 120, "volumen_24h": 150000000, "cap_mercado": 7000000000},
    {"nombre": "NEO", "sigla": "NEO", "precio": 40, "volumen_24h": 300000000, "cap_mercado": 6000000000},
    {"nombre": "IOTA", "sigla": "IOTA", "precio": 1.5, "volumen_24h": 70000000, "cap_mercado": 5000000000},
    {"nombre": "VeChain", "sigla": "VET", "precio": 0.2, "volumen_24h": 800000000, "cap_mercado": 4000000000}
  ]
  
  searchCrypto(){
    const inputValue = (document.getElementById('text') as HTMLInputElement).value;
    console.log('Contenido del input:', inputValue);
    this.buscarCripto((document.getElementById('text') as HTMLInputElement).value);
    (document.getElementById('text') as HTMLInputElement).value = '';
  }

  buscarCripto(palabra: string): any[] {
    this.resultados.slice(0,1)
    const palabraMinuscula = palabra.toLowerCase();
    for (const cripto of this.Criptomonedas) {
        if (cripto.nombre.toLowerCase().includes(palabraMinuscula) || cripto.sigla.toLowerCase() === palabraMinuscula) {
            this.resultados.push(cripto);
            this.resultadoExiste = true
        }
    }
    
    return  this.resultados;
}



  constructor() { }

  ngOnInit() {

  }

}
