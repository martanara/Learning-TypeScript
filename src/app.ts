// Contraints help us set a specific type

function newMerge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const newMergedObject = newMerge({name: 'Max'}, {age: 30});
console.log(newMergedObject.name); 

// We use interface to ensure that we have a length property
interface Lengthy {
  length: number;
}

// We use contraint to make sure the parameter has length property
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 0) {
    descriptionText = 'Got 1 element.'
  } else if ((element.length > 0)) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(['Cooking', 'Sports']));

// keyof makes sure that the object has a key of U
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Max', age: 30}, 'name'));