import { SentenceTranslateComponent } from './sentence-translate/sentence-translate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesPageRoutingModule } from './games.page-routing.module';
import { IonicModule } from '@ionic/angular';
import {GamesComponent} from './games.page'
import { ImageMatchComponent } from './image-match/image-match.component';
import { FormsModule } from '@angular/forms';
import { WordMatchComponent } from './word-match/word-match.component';


@NgModule({
  declarations: [GamesComponent, ImageMatchComponent,WordMatchComponent,SentenceTranslateComponent],
  imports: [
    CommonModule,
    GamesPageRoutingModule,
    IonicModule,
    FormsModule,

  ]
})
export class GamesPageModule { }
