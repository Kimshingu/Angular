/*
  constructor에서 this.color 사용하기 전
  클래스 밑으로 해당 프로퍼티를 멤버변수처럼 선언해야 한다.
*/
class Car{
  color: string;
  
  constructor(color:string = 'Red'){
    this.color = color;
  }
}

let car = new Car();
console.log(car.color);
