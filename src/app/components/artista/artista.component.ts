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

  loading: boolean;
  constructor(private route: ActivatedRoute,
    private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  async getArtista(id: string) {
    this.loading = true;
    const obs = await this.spotify.getArtista(id);
    obs.subscribe(artista => {
      this.loading = false;
      this.artista = artista;
    });
  }

  async getTopTracks(id: string) {
    const obs = await this.spotify.getTopTraks(id);
    obs.subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    })
  }

  ngOnInit() {
  }

}
