// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'John',
//   age: 30,
// }

const person = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// favoriteActivities = ['Sports', 1];
// To create a mixed array we can use 'any': let favoriteActivities: any[];
// 'Any' shouldn' be used too often

console.log(person.name);

for (const hobby of person.hobbies) {
  // TypeScript detects that hobbies are strings and allows to do everything 
  // that can be done to a string
  console.log(hobby.toUpperCase());

  // This throws an ERROR!
  // console.log(hobby.map());
}