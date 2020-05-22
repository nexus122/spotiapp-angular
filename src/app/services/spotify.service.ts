import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Spotify service listo ! ")
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQBjTItUt3_L1xLgjPllT1k1lVS1sRDarjv7vA2___RSKE1_vqhevu4gLg3zOSqL40lGzPUja7hZpAb_IcIkXMdDidO7RMwUop2IvWaOHKb2N1Qf50_CUnMkPtlxJnO248YLRgxohZD_-3E"
    });

    return this.http.get(url, {headers});

  }

  /* Funcion para llamar a los albums */ 
  getNewReleases(){

    return this.getQuery("browse/new-releases")
      .pipe(map(data => data["albums"].items )); 
  }

  /* Funcion para llamar a los artistas */
  getArtistas( termino: string ){

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data["artists"].items )); 
  }

  /* Funcion para llamar a un artista especifico */
  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
      //.pipe(map(data => data["artists"].items )); 
  }

  /* Funcion para llamar a un artista especifico */
  getTopTraks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map(data => data["tracks"] )); 
  }

}
