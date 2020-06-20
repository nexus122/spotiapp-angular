import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean; // Definimos el simbolo de carga

  constructor(private route: ActivatedRoute,
    private spotify: SpotifyService) {
    this.route.params.subscribe(params => { /* Sacamos los parametros de la ruta */
      console.log(params.id);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  /* Llamamos al artista pasandole el id, el id lo obtenemos a travces de app-routing.module */
  async getArtista(id: string) {
    this.loading = true; //Este es el sibolo de carga, mientras la informacion no llegue se muestra
    const obs = await this.spotify.getArtista(id); // Llamamos al servicio, esta peticion es await, eso significa que se espera a que le devuelvan los datos para continuar
    obs.subscribe(artista => { // Nos subscribimos a la informacion que hemos conseguido antes
      this.loading = false; // Como tenemos los datos falseamos el loading
      this.artista = artista; // Cargamos en una variable global, es decir this.artista los datos que hemos sacado de la api para usarlos en el controlador
    });
  }
  
  /* Llamamos a el top de canciones del artista, pasandole el mismo id que antes*/
  async getTopTracks(id: string) {
    const obs = await this.spotify.getTopTraks(id); // Llamamos con la peticion de await, eso significa que se espera hasta que devuelva los datos
    obs.subscribe(topTracks => { // Nos subscribimos a los datos que hemos recogido       
      this.topTracks = topTracks; // Cargamos los datos en una variable global
    })
  }

  ngOnInit() {
  }

}
