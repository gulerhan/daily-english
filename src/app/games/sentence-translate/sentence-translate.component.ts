import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEWord, SentencesResponse, WordsResponse, WordsService } from '../services/words.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sentence-translate',
  templateUrl: './sentence-translate.component.html',
  styleUrls: ['./sentence-translate.component.scss'],
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
export class SentenceTranslateComponent  implements OnInit {

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


  public level = "";
  public selectedSentence = {} as { en: string, tr: string };
  public sentences:DEWord[] = [];
  public options:string[] = [];
  public answers:string[] = [];

  public messageInfo = "";
  public messageFalse = "";
  public showInfo = false;
  public showCard = true;
  public wrongAnswer = false;
  public showFalse = false;
  constructor(
      private activatedRoute: ActivatedRoute,
      private wordsServices: WordsService,
      private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.level = params["level"];
      console.log('Sentences translate level:', this.level);
      this.wordsServices.getLevelSentences(this.level).subscribe((res:SentencesResponse)=>{
        this.sentences = res.sentences;
        this.setSelectedSentences();
      });
    })
  }

  setSelectedSentences(){
    this.options = [];
    this.answers = [];
    this.selectedSentence = this.sentences[this.getRandomInt(this.sentences.length)]
    console.log("selectedSentence", this.selectedSentence)
    console.log("cevap", this.selectedSentence.tr.split(" "))
    this.options = this.selectedSentence.tr.split(" ");
    this.options = this.shuffle(this.options);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  shuffle(array: string[]) {
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
    this.selectedSentence = option;
   }

  clickedAnswer(item:string, index:number){
    this.answers.push(item)
    console.log("item", this.answers);
    this.options.splice(index, 1)
   }
   removeAnswer(item:string, index:number){
    this.options.push(item)
    this.answers.splice(index, 1)
   }

   handleAnswer(){
    const answer = this.answers.join(" ");
    console.log("answer", answer)
    console.log("soru", this.selectedSentence )
    if(this.selectedSentence.tr === answer){
      this.showInfo = true;
      this.showFalse = false;
      this.messageInfo = "Doğru";
      this.setSelectedSentences();
      this.showCard = false;
    setTimeout(() => {
      this.showCard = true;
  }, 400);
      console.log("dogru")
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
