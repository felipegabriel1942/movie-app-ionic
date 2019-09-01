import { Injectable } from '@angular/core';
import { DicaFilmeDTO } from './compartilhado/dica-filme-dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  listaDicasFilmes: any[] = [];

  constructor() { }

  getListaDicasFilmes(): Array<any> {
    this.listaDicasFilmes.push(
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 'Robocop'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'The GodFather'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'Taxi Driver'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BNDE1NTUyOGQtMjNkNS00NjhlLWFjNGEtMWYzMTExZDc1M2M2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', 'Seven Samurai'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'Star Wars'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg', 'Ghostbusters'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg', 'Amadeus'),
      new DicaFilmeDTO('https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg', 'Raiders of the lost ark'));

    return this.listaDicasFilmes;
  }
}
