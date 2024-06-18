import { Component } from '@angular/core';
import {JuegoComponent} from "./juego/juego.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JuegoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
