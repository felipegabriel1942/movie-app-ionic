import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilmeModel } from './filme.model';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {

  formGroup: FormGroup;
  filme = new FilmeModel();
  tituloFilmePesquisa = 'robocop';

  constructor(private filmesService: FilmesService) { }

  ngOnInit() {
    console.log(this.filme);
    this.pesquisarFilme();
  }

  pesquisarFilme() {
    if (this.tituloFilmePesquisa !== '') {
      this.filmesService.getMovie(this.tituloFilmePesquisa).subscribe(
        (success: any) => {
          this.filme.title = success.Title;
          this.filme.poster = success.Poster;
          this.filme.anoLancamento = success.Released;
          this.filme.resumoFilme = success.Plot;
          this.filme.duracao = success.Runtime;
          this.filme.classificacaoEtaria = success.Rated;
          this.filme.bilheteria = success.BoxOffice;
          this.filme.diretor = success.Director;
          this.filme.atores = success.Actors;
          this.filme.avaliacoes = success.Ratings;
          console.log(this.filme);
        }
      );
    }
  }

}
