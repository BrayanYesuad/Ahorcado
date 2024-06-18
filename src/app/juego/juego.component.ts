
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component, ViewChild} from "@angular/core";
import {NgxConfettiComponent, NgxConfettiModule} from "ngx-confetti";

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css',
})
export class JuegoComponent {

  palabras: string[] = ['PYTHON', 'JAVASCRIPT', 'ANGULAR', 'REACT', 'JAVA'];
  palabraSeleccionada: string[] = [];
  palabraVisualizada: string[] = [];
  intentosRestantes: number = 6;
  letraIngresada: string = '';
  resultadoJuego: string = '';
  pista: string = '';


  constructor() {
    this.seleccionarPalabraAleatoria();
    this.inicializarPalabraVisualizada();
    this.establecerPista();
  }

  seleccionarPalabraAleatoria() {
    this.palabraSeleccionada = this.palabras[Math.floor(Math.random() * this.palabras.length)].split('');
  }

  inicializarPalabraVisualizada() {
    this.palabraVisualizada = this.palabraSeleccionada.map(() => '_');
  }

  establecerPista() {
    switch (this.palabraSeleccionada.join('')) {
      case 'PYTHON':
        this.pista = 'PISTA: Es un lenguaje de programación interpretado, multiparadigma y de alto nivel.';
        break;
      case 'JAVASCRIPT':
        this.pista = 'PISTA: Es un lenguaje de programación interpretado, orientado a objetos y de alto nivel.';
        break;
      case 'ANGULAR':
        this.pista = 'PISTA: Es un framework de JavaScript para el desarrollo de aplicaciones web.';
        break;
      case 'REACT':
        this.pista = 'PISTA: Es una biblioteca de JavaScript para la construcción de interfaces de usuario.';
        break;
      case 'JAVA':
        this.pista = 'PISTA: Es un lenguaje de programación compilado, orientado a objetos y de propósito general.';
        break;
    }
  }

  hacerIntento() {
    if (this.letraIngresada.length === 1 && /[a-zA-Z]/.test(this.letraIngresada)) {
      const letra = this.letraIngresada.toUpperCase();
      if (this.palabraSeleccionada.includes(letra)) {
        this.mostrarLetra(letra);
      } else {
        this.intentosRestantes--;
      }
      this.letraIngresada = '';
      this.comprobarEstadoJuego();
    }
  }

  mostrarLetra(letra: string) {
    for (let i = 0; i < this.palabraSeleccionada.length; i++) {
      if (this.palabraSeleccionada[i] === letra) {
        this.palabraVisualizada[i] = letra;
      }
    }
  }

  comprobarEstadoJuego() {
    if (this.intentosRestantes === 0) {
      this.resultadoJuego = `Lo siento, has perdido. La palabra era: ${this.palabraSeleccionada.join('')}`;
    } else if (!this.palabraVisualizada.includes('_')) {
      this.resultadoJuego = '¡Felicitaciones, has ganado!';

    } else {
      this.resultadoJuego = '';
    }
  }
}
