// A common usage in Angular
// The bottom-most decorator runs first (functions). The factories run from the top. The creation happen in order, but execution happen bottom-up

function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY')
  return function(constructor: any) {
    console.log('Rendering template')
    const hookEl = document.getElementById(hookId)
    const p = new constructor;
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object');
  }
}

const pers = new Person();

console.log(pers);

