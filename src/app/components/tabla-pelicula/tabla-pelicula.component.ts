import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  filaSeleccionada: any;

  constructor() { }
  
  seleccionDeFila(item: any) {
    if (item) {
      this.filaSeleccionada = item;
      // Realizar cualquier otra lógica adicional aquí
    }
  }
  
  ngOnInit(): void {
  }

}
