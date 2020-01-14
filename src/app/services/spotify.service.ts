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

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQBsasl7xnFKYar8gag-mlEJloCjXPdWcIMFoTwzLM__IPJ9U91olyZLYdB1rdzaRaorhncvzymFv5md-tY"
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers} )
      .pipe(map(data => data['albums'].items ));   
  }

  getArtista( termino: string ){
    const headers = new HttpHeaders({ 
      'Authorization': "Bearer BQBsasl7xnFKYar8gag-mlEJloCjXPdWcIMFoTwzLM__IPJ9U91olyZLYdB1rdzaRaorhncvzymFv5md-tY"
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers} )
      .pipe(map(data => data["artists"].items ));
  }
}
