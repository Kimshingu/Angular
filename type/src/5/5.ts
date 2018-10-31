interface IGreeter {
  greet(): string;
}
class Greeter implements IGreeter {
  names: Array<string> = ['A', 'B'];
  greeting: string;
  
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return 'Hello, ' + this.greeting;
  }
  
  print(names: Array<string>): void {
    
  }
}

var greeter = new Greeter('Everybody');
console.log(greeter);
var result = greeter.greet();
console.log(result);
