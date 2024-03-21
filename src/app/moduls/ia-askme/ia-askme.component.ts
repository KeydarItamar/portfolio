import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-ia-askme',
  templateUrl: './ia-askme.component.html',
  styleUrls: ['./ia-askme.component.css']
})

export class IaAskmeComponent implements OnInit {

  listaQuerys: string[]= []
  respuestas: string[]=[]
  resultado: string=''

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }
 
  iaChat(query: string): void {
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
