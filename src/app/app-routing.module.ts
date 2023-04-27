/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './modules/busqueda/components/busqueda.component';
import { ActorAltaComponent } from './modules/actor/components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './modules/actor/components/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './modules/pelicula/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './modules/pelicula/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'búsqueda', component: BusquedaComponent },
  { path: 'película/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'película/listado', component: PeliculaListadoComponent },
  { path: '**', redirectTo: 'bienvenido', pathMatch: 'full' }, // Si no encuentra la ruta, redirige a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas', loadChildren: () => import('./modules/pelicula/pelicula.module').then(m => m.PeliculaModule)
  },
  {
    path: 'actor', loadChildren: () => import('./modules/actor/actor.module').then(m => m.ActorModule)
  },
  { path: 'busqueda', loadChildren: () => import('./modules/busqueda/busqueda.module').then(m => m.BusquedaModule) },
  { path: '**', redirectTo: 'bienvenido', pathMatch: 'full' }, // Si no encuentra la ruta, redirige a login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
