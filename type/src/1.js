var a = 10;
var b = 20;
// type을 명시하고 사용하는 JavaScript == TypeScript
// js-type name : ts-type
// var burger: string = 'hamburger',     // String 
//     calories: number = 300,           // Numeric
//     tasty: boolean = true;            // Boolean
// // Alternatively, you can omit the type declaration:
// // var burger = 'hamburger';
// 
// // The function expects a string and an integer.
// // It doesn't return anything so the type of the function itself is void.
// 
// function add(a: number, b: number){
//   return a + b;
// }
// var result = add();
// console.log(result);
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak("burger", 1500);
//# sourceMappingURL=1.js.map