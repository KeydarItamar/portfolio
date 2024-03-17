import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Crypto } from './crypo-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  nuevaCrypto: Crypto = new Crypto('', '', 0, 0, 0, '');
  resultados ={
    "nombre": "",
    "sigla": "",
    "precio": 0, 
    "volumen_24h":0 ,
    "cap_mercado": 0,
    "descripcion": ""
  }
  resultadoExiste: boolean = false

  Criptomonedas = [
    {"nombre": "Bitcoin", "sigla": "BTC", "precio": 45000, "volumen_24h": 1200000, "cap_mercado": 85000, "descripcion": "Bitcoin is the world's first decentralized cryptocurrency."},
    {"nombre": "Ethereum", "sigla": "ETH", "precio": 3500, "volumen_24h": 800000, "cap_mercado": 40000, "descripcion": "Ethereum is an open-source platform for decentralized applications (dApps)."},
    {"nombre": "Binance Coin", "sigla": "BNB", "precio": 400, "volumen_24h": 150000, "cap_mercado": 6000, "descripcion": "Binance Coin is the native cryptocurrency of the Binance exchange platform."},
    {"nombre": "Cardano", "sigla": "ADA", "precio": 2.5, "volumen_24h": 50000, "cap_mercado": 8000, "descripcion": "Cardano is a third-generation blockchain platform that aims to offer a more scalable, interoperable, and sustainable infrastructure."},
    {"nombre": "XRP", "sigla": "XRP", "precio": 1.2, "volumen_24h": 70000, "cap_mercado": 5500, "descripcion": "XRP is a cryptocurrency developed by Ripple Labs Inc. that aims to facilitate fast and economical cross-border payments."},
    {"nombre": "Solana", "sigla": "SOL", "precio": 150, "volumen_24h": 30000, "cap_mercado": 4500, "descripcion": "Solana is a high-performance blockchain designed to scale and support decentralized applications globally."},
    {"nombre": "Polkadot", "sigla": "DOT", "precio": 30, "volumen_24h": 60000, "cap_mercado": 3000, "descripcion": "Polkadot is an interoperable blockchain platform that allows the transfer of any type of data, not just tokens."},
    {"nombre": "Dogecoin", "sigla": "DOGE", "precio": 0.3, "volumen_24h": 200000, "cap_mercado": 2500, "descripcion": "Dogecoin is a cryptocurrency originally created as a joke but has gained popularity as a way to send small amounts of money online quickly and inexpensively."},
    {"nombre": "Avalanche", "sigla": "AVAX", "precio": 60, "volumen_24h": 40000, "cap_mercado": 2000, "descripcion": "Avalanche is a smart contracts platform that aims to offer greater scalability and security."},
    {"nombre": "Chainlink", "sigla": "LINK", "precio": 25, "volumen_24h": 80000, "cap_mercado": 1800, "descripcion": "Chainlink is a decentralized network of oracles that allows blockchains to interact with real-world data securely."},
    {"nombre": "Litecoin", "sigla": "LTC", "precio": 150, "volumen_24h": 30000, "cap_mercado": 1600, "descripcion": "Litecoin is a peer-to-peer cryptocurrency that enables fast and low-cost transactions."},
    {"nombre": "Bitcoin Cash", "sigla": "BCH", "precio": 500, "volumen_24h": 40000, "cap_mercado": 1500, "descripcion": "Bitcoin Cash is a fork of Bitcoin that aims to improve scalability and transaction speed."},
    {"nombre": "Stellar", "sigla": "XLM", "precio": 0.8, "volumen_24h": 100000, "cap_mercado": 1200, "descripcion": "Stellar is a payments platform that connects banks, payment systems, and people to facilitate fast and low-cost transactions worldwide."},
    {"nombre": "EOS", "sigla": "EOS", "precio": 5, "volumen_24h": 50000, "cap_mercado": 1000, "descripcion": "EOS is a blockchain platform that aims to offer scalable performance and parallel transaction processing capabilities."},
    {"nombre": "Tezos", "sigla": "XTZ", "precio": 8, "volumen_24h": 20000, "cap_mercado": 900, "descripcion": "Tezos is a self-amending, open-source platform for smart contracts and decentralized applications."},
    {"nombre": "Tron", "sigla": "TRX", "precio": 0.05, "volumen_24h": 120000, "cap_mercado": 800, "descripcion": "Tron is a platform for entertainment and digital content that allows users to publish, store, and own data in a decentralized manner."},
    {"nombre": "Monero", "sigla": "XMR", "precio": 120, "volumen_24h": 15000, "cap_mercado": 700, "descripcion": "Monero is a privacy-focused cryptocurrency that utilizes anonymization technologies to hide transaction addresses and amounts."},
    {"nombre": "NEO", "sigla": "NEO", "precio": 40, "volumen_24h": 30000, "cap_mercado": 800, "descripcion": "NEO is a blockchain platform and cryptocurrency designed to build a scalable network of decentralized applications."},
    {"nombre": "IOTA", "sigla": "IOTA", "precio": 1.5, "volumen_24h": 7000, "cap_mercado": 500, "descripcion": "IOTA is a distributed ledger technology that enables machines to securely transact data and value without fees."},
    {"nombre": "VeChain", "sigla": "VET", "precio": 0.2, "volumen_24h": 80000, "cap_mercado": 400, "descripcion": "VeChain is a blockchain platform that focuses on enhancing supply chain management and business processes through decentralized applications and IoT integration."}
  ] 
  searchCrypto(){
    const inputValue = (document.getElementById('text') as HTMLInputElement).value;
    console.log('Contenido del input:', inputValue);
    this.buscarCripto((document.getElementById('text') as HTMLInputElement).value);
    (document.getElementById('text') as HTMLInputElement).value = '';
  }

  buscarCripto(palabra: string): any {
    const palabraMinuscula = palabra.toLowerCase();
    for (const cripto of this.Criptomonedas) {
        if (cripto.nombre.toLowerCase().includes(palabraMinuscula) || cripto.sigla.toLowerCase() === palabraMinuscula) {
              this.resultados.nombre = cripto.nombre
              this.resultados.sigla = cripto.sigla
              this.resultados.precio = cripto.precio
              this.resultados.volumen_24h = cripto.volumen_24h
              this.resultados.cap_mercado = cripto.cap_mercado
              this.resultados.descripcion = cripto.descripcion
              this.resultadoExiste = true 
        }
    }
    
    return  this.resultados;
  }
  deleteCrypto(){
    const inputValue = (document.getElementById('delete') as HTMLInputElement).value;
    this.borrarCripto((document.getElementById('delete') as HTMLInputElement).value);
    (document.getElementById('delete') as HTMLInputElement).value = '';
    this.refresh()
  }
  borrarCripto(palabra: string): void {
    const palabraMinuscula = palabra.toLowerCase();
    const indice = this.Criptomonedas.findIndex(cripto =>
        cripto.nombre.toLowerCase() === palabraMinuscula || cripto.sigla.toLowerCase() === palabraMinuscula
    );
    if (indice !== -1) {
        this.Criptomonedas.splice(indice, 1);
        console.log('supuestamente se ha borrado algo')
    }

  }

 refresh():void{
  this.resultadoExiste = false
 }


 @ViewChild('flipCard', {static: true}) flipCard!: ElementRef;

 flipCardFunction() {
   this.flipCard.nativeElement.classList.toggle('flipped');
 }
 agregarCriptomoneda(formulario: NgForm) {
  const valores = formulario.value;
  const nuevaCriptomoneda = {"nombre": valores.nombre, "sigla":  valores.sigla, "precio":  valores.precio, "volumen_24h":  0, "cap_mercado":  0 , "descripcion": valores.descripcion};
  console.log(nuevaCriptomoneda)
  this.Criptomonedas.push(nuevaCriptomoneda);
  this.flipCardFunction() 
}
  constructor() { }

  ngOnInit() {

  }

}
