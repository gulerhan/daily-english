import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  public level: string = "";

constructor(){
}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.level = params["level"];
      console.log('Game level:', this.level);
    });
  }

}
