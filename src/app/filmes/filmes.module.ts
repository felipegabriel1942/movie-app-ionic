import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilmesService } from './filmes.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FilmesComponent],
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilmesRoutingModule
  ],
  providers: [FilmesService]
})
export class FilmesModule { }
