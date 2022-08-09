// Decorator Factory - allows us to customize the decorator function

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

// Whatever is after the @ mark should point at a decorator (not execute it!)
// Decorators runs when JS finds the class definition (not when you use the contructor)

@Logger('LOGGING - PERSON')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object');
  }
}

const pers = new Person();

console.log(pers);

