import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.page';
import { ImageMatchComponent } from './image-match/image-match.component';
import { WordMatchComponent } from './word-match/word-match.component';
import { SentenceTranslateComponent } from './sentence-translate/sentence-translate.component';
import { HearMatchComponent } from './hear-match/hear-match.component';
import { GapFillComponent } from './gap-fill/gap-fill.component';

const routes: Routes = [
  {
    path: ":level",
    component:GamesComponent
  },
  {
    path: ":level/guess",
    component:ImageMatchComponent
  },
  {
    path: ":level/wordMatch",
    component:WordMatchComponent
  },
  {
    path: ":level/hearMatch",
    component:HearMatchComponent
  },
  {
    path: ":level/sentenceTrans",
    component:SentenceTranslateComponent
  },
  {
    path: ":level/gapFill",
    component:GapFillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesPageRoutingModule { }
