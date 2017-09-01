import { Component, OnInit } from '@angular/core';
import { Vingador } from '../vingador';

@Component({
  selector: 'app-listaherois',
  templateUrl: './listaherois.component.html',
  styleUrls: ['./listaherois.component.css']
})
export class ListaheroisComponent implements OnInit {

   // title: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    
    constructor() {
       // this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton')
        ];
    }

  ngOnInit() {
  }
   heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

}
