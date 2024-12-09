import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactText: string = ''; // Inicialización en la declaración

  constructor() { }

  ngOnInit(): void {
    this.contactText = "Si tienes alguna pregunta o quieres saber más sobre mis proyectos, ¡no dudes en contactarme!";
  }

}
