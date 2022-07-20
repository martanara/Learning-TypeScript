// A genercit type is a type in itself but also carries data (although it doesn't care what type of data)
// It does care about some type of data (even any)

const names: Array<string> = ['Max', 'Manuel']; // string[] - it's exactly the same
const mixed: Array<string | number> = ['Max', 3];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

// We can say to typeScript that this promise will return a string. this way we can set a data about

