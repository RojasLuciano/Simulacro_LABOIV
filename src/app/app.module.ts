import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { ActorAltaComponent } from './modules/actor/components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './modules/actor/components/actor-listado/actor-listado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaComponent } from './modules/busqueda/components/busqueda.component';
import { PeliculaAltaComponent } from './modules/pelicula/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './modules/pelicula/pelicula-listado/pelicula-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BienvenidoComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
