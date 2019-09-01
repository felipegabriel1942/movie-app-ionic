import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listaDicasFilmes: any[] = [];

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.listaDicasFilmes = this.homeService.getListaDicasFilmes();
  }

  mostrarDadosFilmesDicas(nomeFilme: string) {
    console.log(nomeFilme);
  }

}
