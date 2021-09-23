import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { 
  
    console.log('Spotify service listo...');

  }

  getQuery( query:string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDuvzSqoWGsA9xUaMR86ztVGXnSwcjzCcM_Nof2C_06gzKeySuy5nwTRPgpD7jW2OdAd2BTsJugQpRHZ_g'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    /* let token: string = 'Bearer BQAoqrEzUxQwsrVCLXovzd_JWQoyrWW_2eUTaHd_vRh9wDkcMBQVZOy6z7Ymoaudcd60kDCg_aAWcj4qrWg'
    const headers = new HttpHeaders({
      'Authorization': token
    }) */
    return this.getQuery('browse/new-releases?limit=20');
    /* return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }); */

  }

  getArtistas(termino: string) {
   /*  let token: string = 'Bearer BQAoqrEzUxQwsrVCLXovzd_JWQoyrWW_2eUTaHd_vRh9wDkcMBQVZOy6z7Ymoaudcd60kDCg_aAWcj4qrWg'
    const headers = new HttpHeaders({
      'Authorization': token
    }) */

    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`);

    /* return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers }); */
  }
  
  //Obtener esta información del artista
  getArtista( id: string) {
    
     return this.getQuery(`artists/${ id }`);
     
   }

   //Obtener la información de las canciones del artista
   getTopTracks( id: string) {
    
    return this.getQuery(`artists/${id}/top-tracks?country=us`);
    
  }

}
