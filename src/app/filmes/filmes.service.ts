import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageKeys } from '../keys/storage-keys';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {


  constructor(private http: HttpClient,
              ) { }


  getMovie(nomeFilme: string) {
    return this.http.get(`http://www.omdbapi.com/?apikey=${StorageKeys.omdbapiKey}&t=${nomeFilme}`);
  }

  getMovieImages(nomeFilme: string, anoFilme) {
    return this.http.get(`https://www.googleapis.com/customsearch/v1?key=${StorageKeys.googleSearchApiKey}&cx=${StorageKeys.customSearchEngineKey}&searchType=image&q=${nomeFilme}+${anoFilme}`);
  }

  getMovieTrailers(nomeFilme: string, anoFilme) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${StorageKeys.googleSearchApiKey}&part=snippet&q=${nomeFilme}+${anoFilme}+trailer`);
  }
}
