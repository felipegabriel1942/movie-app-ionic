import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }


  getMovie(nomeFilme: string) {
    console.log(nomeFilme);
    return this.http.get(`http://www.omdbapi.com/?apikey=2be05d91&t=${nomeFilme}`);
  }
}
