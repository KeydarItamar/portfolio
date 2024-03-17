export class Crypto {
    nombre: string;
    sigla: string;
    precio: number;
    volumen_24h: number;
    cap_mercado: number;
    descripcion: string;
  
    constructor(nombre: string, sigla: string, precio: number, volumen_24h: number, cap_mercado: number, descripcion: string,) {
      this.nombre = nombre;
      this.sigla = sigla;
      this.precio = precio;
      this.volumen_24h = volumen_24h;
      this.cap_mercado = cap_mercado;
      this.descripcion = descripcion;
    }
  }