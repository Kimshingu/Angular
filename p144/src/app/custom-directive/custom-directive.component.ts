import { Component, OnInit } from '@angular/core';

// ng g component custom-directive -t -s --spec false
// -t(HTML) -s(CSS) --spec false 파일을 생성하지 않는다.
@Component({
  selector: 'app-custom-directive',
  template: `
  <h1>Welcome</h1>
  <h1 myHidden> Hidden Welcome </h1>
  <br><br>
  <div>
  <input type="text" placeholder="name">
  </div>
  <br>
  <div>
  <input type="email" placeholder="email" myHighlight>
  </div>
  <br>
  <div>
  <input type="tel" placeholder="tel" myHighlight>
  </div>
  <hr>
  `,
  styles: []
})
export class CustomDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
