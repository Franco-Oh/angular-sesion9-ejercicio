import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio-9';
  activado! : boolean;
  inactive = "Activa el checkbox para mostrar el contenido"
}
