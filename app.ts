
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // Tuples can be assigned like this to make sure the array consists of only two values
  role: [number, string];
} = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role[1] = 10;
// This code won't work because we can't assing a number as second value

// person.role.push('admin');
// Unfortunately this would work, push is an exception


