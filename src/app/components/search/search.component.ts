import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor( private spotify: SpotifyService ) { }

  artistas:any[] = [];
  loading: boolean;
  ngOnInit() {
  }

  async buscar( termino: string ){ // Componente de busqueda        
    this.loading = true; // El loading se muestra
    const obs = await this.spotify.getArtistas(termino); // Esta funcion es asincrona y espera a que se carguen los datos para continuar
      obs.subscribe( data => { // Nos subscribimos a los datos.               
          this.artistas = data; // Cargamos los datos en una variable global         
          this.loading = false; // Ocultamos el gif de carga     
      })
  };

}
