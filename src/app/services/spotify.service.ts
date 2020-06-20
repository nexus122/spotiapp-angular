import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators"; // Esto sirve para darle forma a los datos que salen de las peticiones de la api

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service listo ! "); // Cuando se carga la api
    var auth: any[];    
    var result: any;
  }

  getToken() {
    const url = `https://spotiapp-angular.herokuapp.com/spotify/fb8dda8be48d409e99a93d4c296afdbb/309ab99d163949e7b6e07c5ddecf3314`; // Llamamos a un servidor de heroku, para que nos devuelva el token de spotify (el servidor funciona en node.js)
 
    const prom = this.http.get(url).toPromise().then((data: any) => data.access_token);
    return prom;
}

async getQuery(query: string) { //Esto es la base para generar las consultas, esta la url de spotyfy mas la consulta.
  const token = await this.getToken(); // Esperamos al token de spotify
  const url = 'https://api.spotify.com/v1/' + query;
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
  return this.http.get(url, {headers});
}


  /* Funcion para llamar a los albums */
  async getNewReleases() {
    const obs = await this.getQuery('browse/new-releases?limit=20'); //Aqui llamamos a getQuery() para que nos devuelva el token y los albums
    return obs.pipe(map((data: any) => data.albums.items));
 }

  /* Funcion para llamar a los artistas */
  async getArtistas(termino: string) {
    var obs = await this.getQuery(`search?q=${termino}&type=artist`);    
    return obs.pipe(map(data => data["artists"].items));        
  }

  /* Funcion para llamar a un artista especifico */
  async getArtista(id: string) {
    var obs = await this.getQuery(`artists/${id}`);    
    return obs;
  }

  /* Funcion para llamar a un artista especifico */
  async getTopTraks(id: string) {
    var obs = await this.getQuery(`artists/${id}/top-tracks?country=us`);
    return obs.pipe(map(data => data["tracks"]));
  }

}
