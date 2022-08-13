import { Component } from '@angular/core';

interface Musico {
  nombre: string,
  trabajo: string,
  instrumento: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  musicos: Musico [] = [];

  musicoNuevo: Musico = {
    nombre: 'Antonio Vivaldi',
    trabajo: 'Compositor',
    instrumento: 'Violin'
  }

  public inicializar (): void {
    this.musicos = [
      {
        nombre: "Amadeus Mozart",
        trabajo: "Compositor",
        instrumento: "piano"
      },
      {
        nombre: "Ludwig van Beethoven",
        trabajo: "Compositor",
        instrumento: "piano"
      }
    ];

  }

  public agregar (): void {
    this.musicos.push(this.musicoNuevo);
    this.musicoNuevo = {
      nombre: '',
      trabajo: '',
      instrumento: ''
    }

  }

}
