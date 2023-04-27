import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  fechaEstreno!: string;
  tipoPelicula!: string;
  id!: string;
  nombre!: string;
  cantidadDePublico!: string;
  rutaFoto!: string;

  constructor() { }

  limpiar() {
  }


  ngOnInit(): void {
  }

}
