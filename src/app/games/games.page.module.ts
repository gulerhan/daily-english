import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesPageRoutingModule } from './games.page-routing.module';
import { IonicModule } from '@ionic/angular';
import {GamesComponent} from './games.page'


@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesPageRoutingModule,
    IonicModule
  ]
})
export class GamesPageModule { }
