// Let & const

const userName = 'Max';
// userName = 'Maximilian'
// not allowed because of contant

var result;
// TypeScript won't complain there's no type becasue it can detect the assignement below
// this is not possible with "let"

function add (a: number, b: number) {
  result = a + b;
  return result;
};

add(2, 5);

console.log(result);

// Arrow function & default parameters
const addTwo = (a: number, b: number = 1) => a + b;
// Default parameters always need to be last

const printOutput: (a: number | string) => void = output => console.log(output);
// This is an example of function type assigned to a constant

printOutput(addTwo(5));

// Spread operator

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

console.log(activeHobbies);

// Arrays are objects. 
// When we push or add something we change the memory but not the adress

const person = {
  firstName: 'Valerie',
  age: 29
};

// const copiedPerson = person;
// I nthe above we're copying the pointer at this person object in memory, into this copyPerson constant
// We're not really creating a copy of this object

const copiedPerson = { ...person };

// This gives us a perfect copy of the key/value pairs, not just the pointer

console.log(copiedPerson);

// Rest parameters, we can use spreading for unknown number of parameters

const addMany = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = addMany(2, 7, 13, 4.5);
console.log(addedNumbers);

// Array and object destructuring

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies; 
// destructuring means that you are pulling elements out of array

console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;
console.log(firstName, age);

// This pulls values for these keys and stores them in constants of the same name