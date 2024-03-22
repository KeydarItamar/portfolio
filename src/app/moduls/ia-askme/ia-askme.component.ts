import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { DarkService } from 'src/app/dark.service';


@Component({
  selector: 'app-ia-askme',
  templateUrl: './ia-askme.component.html',
  styleUrls: ['./ia-askme.component.css']
})

export class IaAskmeComponent implements OnInit {

  listaQuerys: string[]= []
  respuestas: string[]=[]
  resultado: string=''
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 25;
  
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }
 
  iaChat(query: string): void {
    this.listaQuerys.push(query)
    this.chatService.enviarDatosAlBackend(query)
      .subscribe({
         next: response => {
          this.resultado = response;
          this.respuestas.push(this.resultado)
        },
        error: error => {
          console.error('Error al llamar al backend:', error);
        }
       });
    query = '';
  }


}
