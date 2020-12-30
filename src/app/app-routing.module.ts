import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeCountryComponent } from './components/home-country/home-country.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent}, // Ruta para el componente home-
  {path: 'home/:id', component: HomeCountryComponent}, // Ruta para el componente home-
  {path: 'search', component: SearchComponent}, // Ruta para el componente buscador.
  {path: 'artist/:id', component: ArtistaComponent}, // Ruta para el componente artista, se envia tambien una id como parametro para saber que artista cargar
  {path: '', pathMatch: 'full', redirectTo: 'home'}, // Ruta que lleva al componente home por defecto si no coincide con ninguna anterior
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // Ruta que lleva al componente home si no coincide con ninguna anterior
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
