import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

constructor(){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log('Game level:', params["level"]);
    });
  }

}
