// Decorators don't impact end users. They are for other programmers.
// Decorator is a function. It doesn't have to start with an uppercase but usually they do.

function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

// Whatever is after the @ mark should point at a decorator (not execute it!)
// Decorators runs when JS finds the class definition (not when you use the contructor)

@Logger 
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object');
  }
}

const pers = new Person();

console.log(pers);

