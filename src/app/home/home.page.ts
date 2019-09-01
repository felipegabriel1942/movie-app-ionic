import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listaDicasFilmes: any[] = [];

  constructor(private homeService: HomeService,
              public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.listaDicasFilmes = this.homeService.getListaDicasFilmes();
    this.mensagemBoasVindas();
  }

  mostrarDadosFilmesDicas(nomeFilme: string) {
    console.log(nomeFilme);
  }

  async mensagemBoasVindas() {
    const toastBoasVindas = await this.toastCtrl.create({
      message: 'Bem vindo ao Movie Brain!',
      duration: 2000,
      color: 'primary'
    });
    toastBoasVindas.present();
  }

}
