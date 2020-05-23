import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service listo ! ");
    var auth: any[];    
    var result: any;
  }

  getToken() {
    const url = `https://spotiapp-angular.herokuapp.com/spotify/fb8dda8be48d409e99a93d4c296afdbb/309ab99d163949e7b6e07c5ddecf3314`;
 
    const prom = this.http.get(url).toPromise().then((data: any) => data.access_token);
    return prom;
}

async getQuery(query: string) {
  const token = await this.getToken();
  const url = 'https://api.spotify.com/v1/' + query;
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
  return this.http.get(url, {headers});
}


  /* Funcion para llamar a los albums */
  async getNewReleases() {
    const obs = await this.getQuery('browse/new-releases?limit=20');
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
    //.pipe(map(data => data["artists"].items )); 
  }

  /* Funcion para llamar a un artista especifico */
  async getTopTraks(id: string) {
    var obs = await this.getQuery(`artists/${id}/top-tracks?country=us`);
    return obs.pipe(map(data => data["tracks"]));
  }

}
