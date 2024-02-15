import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomePageComponent } from './home.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ]
})
export class HomePageModule { }
