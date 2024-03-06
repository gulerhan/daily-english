import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  constructor(private http: HttpClient) { }

  getLevelWords(level:string) :Observable <WordsResponse> {
    const url = `../../../assets/words/${level}-Words.json`;
    return this.http.get<WordsResponse>(url);
  }

  getLevelSentences(level:string) :Observable <SentencesResponse> {
    const url = `../../../assets/sentences/${level}-sentences.json`;
    return this.http.get<SentencesResponse>(url);
  }
}


export interface DEWord {
  en:string,
  tr:string
}

export interface WordsResponse{
  words: DEWord[]
}

export interface SentencesResponse{
  sentences: DEWord[]
}
