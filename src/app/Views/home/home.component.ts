import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = ''; // Inicialización en la declaración
  description: string = ''; // Inicialización en la declaración

  constructor() { }

  ngOnInit(): void {
    this.title = "¡Hola, soy Ricardo Uzhca!";
    this.description = "Soy un estudiante de Programación Móvil. Explora mi portafolio y conoce más sobre mí.";
  }

}
