import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators"; // Esto sirve para darle forma a los datos que salen de las peticiones de la api

@Injectable({
  providedIn: 'root'
})
export class SpotifyService { // Es el servicio para pedirle informacion a Spotify

  constructor(private http: HttpClient) {
    console.log("Spotify service listo ! "); // Cuando se carga la api
    var auth: any[];    
    var result: any;
  }
  /* Esta funcion nos devuelve el token para poder hacer consultas de spotify */
  getToken() {
    const url = `https://spotiapp-angular.herokuapp.com/spotify/fb8dda8be48d409e99a93d4c296afdbb/309ab99d163949e7b6e07c5ddecf3314`; // Llamamos a un servidor de heroku, para que nos devuelva el token de spotify (el servidor funciona en node.js) 
    const prom = this.http.get(url).toPromise().then((data: any) => data.access_token);
    return prom;
}

/* Funcion asincrona utilizada como base de las peticiones */
/* Asincrona significa que el resto de funciones cuando llaman a esta se esperan a que se solucione para continuar */
async getQuery(query: string) { //Esto es la base para generar las consultas, esta la url de spotyfy mas la consulta.
  const token = await this.getToken(); // Esperamos al token de spotify
  const url = 'https://api.spotify.com/v1/' + query; // Se consulta a la url por defecto y se le suma la consulta
  const headers = new HttpHeaders({ // La api necesita el token para devolver informacion.
    Authorization: `Bearer ${token}`
  });
  return this.http.get(url, {headers});
}


  /* Funcion para llamar a los albums */
  async getNewReleases() { // Esta funcion llama los nuevos albums que estan ahora de moda, llama a 20.
    const obs = await this.getQuery('browse/new-releases?limit=20'); //Aqui llamamos a getQuery() para que nos devuelva el token y los albums nuevos
    return obs.pipe(map((data: any) => data.albums.items)); // Con esto lelvamos la informacion hasta el componente
 }

  /* Funcion para llamar a los artistas */
  async getArtistas(termino: string) { // Funcion que nos devuelve a los artistas que coincidan con el termino de la barra de busqueda
    var obs = await this.getQuery(`search?q=${termino}&type=artist`); // Se pasa el termino como query a la url base de getQuery()
    return obs.pipe(map(data => data["artists"].items)); // Se translada la informacion al componente de artistas       
  }

  /* Funcion para llamar a un artista especifico */
  async getArtista(id: string) { /* A esta fuincion se accede despues de a getArtistas, ya que es cuando se selecciona un artista individual, y se pasa el id del artista como parametro.*/
    var obs = await this.getQuery(`artists/${id}`); // Devuelve algo de informacion sobre el artista y la imagen    
    return obs;
  }

  /* Funcion para llamar a las canciones top de un artista concreto */
  async getTopTraks(id: string) { // Se pasa el id igual, pero esta vez se busca 
    var obs = await this.getQuery(`artists/${id}/top-tracks?country=us`);
    return obs.pipe(map(data => data["tracks"]));
  }

}
