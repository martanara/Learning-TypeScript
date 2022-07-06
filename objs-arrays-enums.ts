// Enum is a custom type
// It helps to store number values in a map-like way, under human readable identifiers
// It can be used instead of constants in JS

enum Role { ADMIN, READ_ONLY, AUTHOR };

// each role will be assigned a number 0, 1, 2 etc.

// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
// Own values can be assigned as in the example above, in case of numbers they will be incremented

const person = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('is admin');
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// favoriteActivities = ['Sports', 1];
// This will throw an error because 1 is not a string

// To create a mixed array we can use 'any': let favoriteActivities: any[];
// 'Any' shouldn't be used too often

console.log(person.name);

for (const hobby of person.hobbies) {
  // TypeScript detects that hobbies are strings and allows to do everything 
  // that can be done to a string
  console.log(hobby.toUpperCase());

  // This throws an ERROR!
  // console.log(hobby.map());
}





