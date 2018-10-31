/*
  1. constructor에서 this.color 사용하기 전
  클래스 밑으로 해당 프로퍼티를 멤버변수처럼 선언해야 한다.
  2. 대신, 생성자 파라미터 앞에 접근제어자를 붙이면
  멤버변숴럼 선언하지 않아도 된다.
*/
var Car2 = /** @class */ (function () {
    // color: string;
    function Car2(color) {
        if (color === void 0) { color = 'Red'; }
        this.color = color;
        this.color = color;
    }
    Car2.prototype.print = function () {
        console.log(this.color);
    };
    return Car2;
}());
// private: 해당 변수는 Car2 클래스 안에서만 접근할 수 있다.(그렇게 써달라)
var car2 = new Car2();
console.log(car2.color); // private인 경우 안쪽 자원을 사용할 수 없다.
//# sourceMappingURL=4.js.map