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

  async buscar( termino: string ){        
    this.loading = true;
    const obs = await this.spotify.getArtistas(termino);
      obs.subscribe( data => {        
        console.log(data);        
          this.artistas = data         
          this.loading = false;      
      })
  };

}
