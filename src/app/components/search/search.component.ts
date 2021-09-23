import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  constructor( private spotify: SpotifyService) { 
    this.loading= true;

  }
  
  buscar(termino: string) {
      console.log(termino)
      this.spotify.getArtistas( termino )
                  .subscribe( (data:any) => {
                    console.log(data.artists.items);
                    this.artistas = data.artists.items;
                    this.loading = false;
                  })

  }

}
