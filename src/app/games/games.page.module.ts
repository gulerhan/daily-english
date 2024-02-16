import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesPageRoutingModule } from './games.page-routing.module';
import { IonicModule } from '@ionic/angular';
import {GamesComponent} from './games.page'
import { ImageMatchComponent } from './image-match/image-match.component';


@NgModule({
  declarations: [GamesComponent, ImageMatchComponent],
  imports: [
    CommonModule,
    GamesPageRoutingModule,
    IonicModule
  ]
})
export class GamesPageModule { }
