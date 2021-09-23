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
      'Authorization': 'Bearer BQCUepEJhgrB_U2rdDPmMReLmrHU58iSv8DQ3VtIt2YT99VY5WOcaq5uA-7TiPt4-jj25fpLm9dxaUYrVNo'
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

  getArtista( id: string) {
    
     return this.getQuery(`artists/${ id }`);
     
   }

}
