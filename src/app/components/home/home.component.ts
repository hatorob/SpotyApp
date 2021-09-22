import { Component, OnInit } from '@angular/core';
// Importamos el HttpClient para poder realizar peticones http
/* import { HttpClient } from '@angular/common/http'; */
// Se importa el servicio de spotify
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent /* implements OnInit */ {
  
  /* paises: any[] = []; */
  nuevasCanciones: any[] = [];

  loading: boolean;
    
  constructor( /* private http: HttpClient */
      private Spotify: SpotifyService
    ) { 

    /* console.log("Constructor del Home hecho");
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
              .subscribe( (resp: any) => {
                this.paises = resp;
                console.log(resp);
              } ) */
      this.loading = true;

      this.Spotify.getNewReleases()
                  .subscribe( (data:any) => {
                    console.log(data.albums.items);
                    this.nuevasCanciones = data.albums.items;
                    this.loading = false;
                  });

  }

  /* ngOnInit(): void {
  } */

}
