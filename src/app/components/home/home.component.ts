import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean; 

  error:boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService  ) { 
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((data:any) => {        
        this.nuevasCanciones = data;
        this.loading = false;
      },( errorServicio )=>{
        this.error = true;
        this.loading = false;
        console.log(errorServicio);
        console.log(errorServicio.error.error.message); 
        this.mensajeError = errorServicio.error.error.message;
      });

  }

  ngOnInit() {
  }

}
