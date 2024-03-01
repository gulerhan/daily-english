import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DEWord, WordsResponse, WordsService } from '../services/words.service';

@Component({
  selector: 'app-image-match',
  templateUrl: './image-match.component.html',
  styleUrls: ['./image-match.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class ImageMatchComponent implements OnInit {
  public alertButtons = [
    {
      text: 'Çıkış',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Evet',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigateByUrl('games/a1');
      },
    },
  ];

  public level: string = "";
  public words:DEWord[] = [];
  public selectedWord = {} as { en: string, tr: string };
  public userInput: string = "";
  public showInfo: boolean = false;
  public showFalse: boolean = false;
  public messageInfo: string = "";
  public showCard = true;
  public wrongAnswer = false;
  public messageFalse: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wordsServices: WordsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    console.log("words", this.words)
      this.activatedRoute.params.subscribe(params => {
        this.level = params["level"];
        this.wordsServices.getLevelWords(this.level).subscribe((res:WordsResponse)=>{
          console.log("words",this.level, res)
          this.words = res.words;
          this.setSelectedWord();
        });
        console.log('Image Match level:', this.level);
      });
  }

  setSelectedWord() {
    this.selectedWord = this.words[this.getRandomInt(this.words.length)]
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  setOpen(isOpen: boolean) {
    this.showInfo = isOpen;
    this.showFalse = isOpen;
  }

  handleAnswer() {
    console.log("answer, userinput:", this.selectedWord.en, this.userInput);
    if (this.selectedWord.en.toLowerCase() == this.userInput.toLowerCase()) {
      this.showInfo = true;
      this.showFalse = false;
      this.messageInfo = "Doğru"
      this.setSelectedWord();
      this.userInput = "";
      this.showCard = true;
      setTimeout(() => {
        this.showCard = false;
      }, 400);
    } else {
      this.showInfo = false;
      this.showFalse = true;
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 400);
      this.messageFalse = "Yanlış"
    }
  }
}
