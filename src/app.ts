function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({name: 'Max'}, {age: 30});
// console.log(mergedObject.name) => this won't work because TypeScript doesn't know about the property

// Generic funtion, typically while naming we start with T (as type) and then go alphabeticalle
function newMerge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// We are telling TypeScript that the parameters will change dynamically
// we don't have to add any more specific information

const newMergedObject = newMerge({name: 'Max'}, {age: 30});
console.log(newMergedObject.name) // now it works becasue TypeScript knows about the object intersection


