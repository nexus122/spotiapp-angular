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
    this.loading = true; // Signo de carga empieza mostrandose
    this.error = false; // Mensaje de error en el caso de que no haya datos, empieza falseado
  }

  ngOnInit() { 
    this.getNewReleases(); // Cuando se inicie la pagina cargamos los datos de nuevos albumes
  }

  async getNewReleases() { // Funcion de carga de albums
    (await this.spotify.getNewReleases()) // Esperamos a que la funcion se cargue para continuar
     .subscribe((data: any) => { // Se carga los datos
      this.loading = false; // Se oculta el loading
      this.nuevasCanciones = data; // Cargamos los datos en la variable global
     }, (e) => { // Se cumple si no se pueden cargar los datos
      this.loading = false; // Ocultamos el loading
      this.error = true; // Se muestra el error porque no hay datos
      this.mensajeError = e.error.error.message; // Mostramos el mensaje de error    
     });
  }

}
