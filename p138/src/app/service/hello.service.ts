import { Injectable } from '@angular/core';


// providedIn: 'root'
// Angular 6에서 추가 됨
// 루트모듈안에서 공급받는다.
@Injectable(
  // {
  //   // providedIn: 'root'
  // }
)
export class HelloService {
  helloTitle = 'This is HelloService\'s Title.';

  constructor() { }
  getTitle() {
    return this.helloTitle;
  }
  setTitle(title) {
    this.helloTitle = title;
  }
}
