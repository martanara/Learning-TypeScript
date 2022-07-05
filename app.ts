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





