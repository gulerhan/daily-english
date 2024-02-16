import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  wordJson from '../../../assets/lang/A1words.json';


@Component({
  selector: 'app-image-match',
  templateUrl: './image-match.component.html',
  styleUrls: ['./image-match.component.scss'],
})
export class ImageMatchComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  public level: string = "";
  public words = wordJson.words;

  constructor() { }

  ngOnInit() {
    console.log("words",this.words)
    this.activatedRoute.params.subscribe(params => {
      this.level = params["level"];
      console.log('Image Match level:', this.level);
    });
  }

}
