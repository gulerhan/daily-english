import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { WordMatchComponent } from './games/word-match/word-match.component';

@NgModule({
  declarations: [AppComponent,HeaderMenuComponent,WordMatchComponent],
  imports: [BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
