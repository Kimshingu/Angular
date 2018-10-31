import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  // templateUrl: './contact.component.html',
  template: `
  <div class="container">
    <h3>ContactComponent.<mark>html</mark></h3>
  </div>
  `,
  // styleUrls: ['./contact.component.css']
  styles: [
  `
  .container{
    border: 2px solid white;
    height: 100px;

  }
  `
]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
