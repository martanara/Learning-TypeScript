// A common usage in Angular

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(_: Function) {
    // the underscore tells typescript we won't use the argument
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object');
  }
}

const pers = new Person();

console.log(pers);

