/*
  constructor에서 this.color 사용하기 전
  클래스 밑으로 해당 프로퍼티를 멤버변수처럼 선언해야 한다.
*/
var Car = /** @class */ (function () {
    function Car(color) {
        if (color === void 0) { color = 'Red'; }
        this.color = color;
    }
    return Car;
}());
var car = new Car();
console.log(car.color);
//# sourceMappingURL=3.js.map