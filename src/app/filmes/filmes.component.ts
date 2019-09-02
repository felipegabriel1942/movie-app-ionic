import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { FormGroup} from '@angular/forms';
import { FilmeModel } from './filme.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {

  formGroup: FormGroup;
  filme = new FilmeModel();
  tituloFilmePesquisa = '';
  listaImagensSlider = [];
  constructor(private filmesService: FilmesService,
              private route: ActivatedRoute,
              private loadingCtrl: LoadingController,
              public toastCtrl: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.tituloFilmePesquisa = paramMap.get('nomeFilme');
    });
    this.pesquisarFilme();
  }

  pesquisarFilme() {
    if (this.tituloFilmePesquisa !== null) {
      this.loadingCtrl.create({
        message: 'Buscando filme...'
      }).then(loadingEl => {
        loadingEl.present();
        this.filmesService.getMovie(this.tituloFilmePesquisa).subscribe(
          (success: any) => {
            if (success.Error === 'Movie not found!') {
              this.mensagemErro('Filme não encontrado');
              loadingEl.dismiss();
              return;
            }
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
            this.filmesService.getMovieImages(this.filme.title, this.filme.anoLancamento).subscribe(
              (success: any ) => {
                this.listaImagensSlider = [];
                success.items.forEach(element => {
                  this.listaImagensSlider.push(element.link);
                });
              }
            );
            this.filmesService.getMovieTrailers(this.filme.title, this.filme.anoLancamento).subscribe(
              (success: any) => {
                loadingEl.dismiss();
              }
            );
          }, error => {
            console.log('deu erro');
          }
        );
      });
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

  async mensagemErro(mensagem: string) {
    const mensagemErro = await this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      color: 'danger'
    });
    mensagemErro.present();
  }
}
