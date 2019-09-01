import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilmeModel } from './filme.model';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {

  formGroup: FormGroup;
  filme = new FilmeModel();
  tituloFilmePesquisa = 'robocop';
  listaImagensSlider = [];
  constructor(private filmesService: FilmesService,
              private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
    console.log(this.filme);
    this.pesquisarFilme();
    
  }

  pesquisarFilme() {
    if (this.tituloFilmePesquisa !== '') {
      this.filmesService.getMovie(this.tituloFilmePesquisa).subscribe(
        (success: any) => {
          console.log(success);
          this.filme.title = success.Title;
          this.filme.poster = success.Poster;
          this.filme.dataLancamento = success.Released;
          this.filme.resumoFilme = success.Plot;
          this.filme.duracao = success.Runtime;
          this.filme.classificacaoEtaria = success.Rated;
          this.filme.bilheteria = success.BoxOffice;
          this.filme.diretor = success.Director;
          this.filme.atores = success.Actors;
          this.filme.avaliacoes = success.Ratings;
          this.filme.idiomaOriginal = success.Language;
          this.filme.anoLancamento = success.Year;
          console.log(this.filme);
          this.filmesService.getMovieImages(this.filme.title, this.filme.anoLancamento).subscribe(
            (success: any ) => {
              this.listaImagensSlider = [];
              success.items.forEach(element => {
                this.listaImagensSlider.push(element.link);
              });
              console.log(this.listaImagensSlider);
            }
          );

          this.filmesService.getMovieTrailers(this.filme.title, this.filme.anoLancamento).subscribe(
            (success: any) => {
              console.log(success);
            }
          );
        }
      );
    }
  }

  setImageIconSiteAvaliacao(site: string): string {
    if (site === 'Internet Movie Database') {
      return 'imdb.png';
    } else if (site === 'Metacritic') {
      return 'metacritic.png';
    } else {
      return 'rotten-tomatoes.jpg';
    }
  }

  abrirVideo(){
    this.youtube.openVideo('https://www.youtube.com/watch?v=er_xFGwIVIk');
  }
}
