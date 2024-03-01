import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEWord, WordsResponse, WordsService } from '../services/words.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

  @Component({
    selector: 'app-word-match',
    templateUrl: './word-match.component.html',
    styleUrls: ['./word-match.component.scss'],
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

  export class WordMatchComponent  implements OnInit {

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
  public selectedWord = {} as { en: string, tr: string };
  public words:DEWord[] = [];
  public options: DEWord[] = [];
  public selectedOption: DEWord | undefined = undefined;
  public showInfo: boolean = false;
  public messageInfo: string = "";
  public messageFalse: any;
  public showCard = true;
  public wrongAnswer = false;
  public showFalse: boolean = false;
    constructor(
      private activatedRoute: ActivatedRoute,
      private wordsServices: WordsService,
      private router: Router
    ) {}

      ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
          this.level = params["level"];
          this.wordsServices.getLevelWords(this.level).subscribe((res:WordsResponse)=>{
            console.log("words",this.level, res)
            this.words = res.words;
            this.setSelectedWord();
          console.log('Word Match level:', this.level);
        });
      });
    }

    setSelectedWord() {
      this.options = [];
      this.selectedWord = this.words[this.getRandomInt(this.words.length)]
      this.options.push(this.selectedWord);
      let start = this.getRandomInt(this.words.length)
      let end = this.getRandomInt(this.words.length)
      if(start > end){
        const temp = start;
        start = end;
        end = temp;
      }

      const randomOptions = this.words.slice(start, end).slice(0,3);
      this.options.push(...randomOptions)
      this.options = this.shuffle(this.options)
      console.log("selectedWord",this.selectedWord)
      console.log("start: end:",start,end)
      console.log("randomOptions",randomOptions)
      console.log("options", this.options)
    }
    getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

     shuffle(array: DEWord[]) {
      const shuffled = array.slice();
      let currentIndex = shuffled.length;
      let temporaryValue, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
      }
      return shuffled;
    };

    setOpen(isOpen: boolean) {
      this.showInfo = isOpen;
      this.showFalse = isOpen;
    }

    handleSelectedOption(option:DEWord){
     this.selectedOption = option;
    }

    handlerAnswer(){
      if(this.selectedOption?.en.toLocaleLowerCase() === this.selectedWord.en.toLocaleLowerCase()){
      this.showInfo = true;
      this.showFalse = false;
      this.messageInfo = "Doğru";
      this.setSelectedWord();
      this.showCard = false;
      setTimeout(() => {
        this.showCard = true;
      }, 400);
      }else{
      this.showInfo = false;
      this.showFalse = true;
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 300);
        this.messageFalse = "Yanlış"

    }
      }
    }

