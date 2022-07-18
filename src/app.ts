// Interfaces only exist in TypeScript
// Interfaces are used to define objects

// Interfaces and custom types can be used interchangeably sometimes but there are differences

interface Someone {
  name: string;
  readonly age: number;
  // We can use readonly

  greet(phrase: string): void;
}

let user1: Someone;

user1 = {
  name: 'Max',
  age: 23,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}

user1.greet('Hi there - I am');

interface Named {
  name: string;
  // ? means the parameter is optional, this works on class too
  outputName?: string;
}

// Extending interfaces is also possible
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Classes can impement multiple interfaces (sperate by commas)
class Person implements Greetable {
  // Classes can have other variables & functions
  name: string;
  occupation?: string;
  readonly age: number = 30;
  
  constructor(n: string, o?: string) {
    this.name = n;
    if (o) {
      this.occupation = o;
    }
  }

  greet(phrase: string) {
    if (this.occupation) {
      console.log(phrase + ' ' + this.name + ', ' + 'I am a' + ' ' + this.occupation)
    } else {
      console.log(phrase + ' ' + this.name)
    }
  }
}

let user2: Greetable;
// We cannot store in user one anything that doesn't have a greet method

user2 = new Person('Marta', 'programmer');
console.log(user2);
user2.greet('Hi there - I am');

// Interfaces can store functions (using custom type is probably more often)

// type AddFn = (a: number, b: number) => number;

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

