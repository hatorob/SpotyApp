import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { 
  
    console.log('Spotify service listo...');

  }

  getNewReleases() {
    let token: string = 'Bearer BQBFFHJkTJ5cejLPivRk8Ww__2QGw26AY26IuCtl_1uQGPJUdverudJ1R-J0Un9TMyuE-JWdD1m68ETxW5U'
    const headers = new HttpHeaders({
      'Authorization': token
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

  }

  getArtista(termino: string) {
    let token: string = 'Bearer BQBFFHJkTJ5cejLPivRk8Ww__2QGw26AY26IuCtl_1uQGPJUdverudJ1R-J0Un9TMyuE-JWdD1m68ETxW5U'
    const headers = new HttpHeaders({
      'Authorization': token
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers });
  }

}
