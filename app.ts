function add(n1: number, n2: number) {
  return n1 + n2;
};

// return type = 'void'
function printResult(num: number) {
  console.log('Result ' + num);
};

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
};

printResult(add(5, 12));

// function types

let combinedValues: (a: number, b: number) => number;
combinedValues = add;

// TypeScript will complain because we have one argument and nothing is returned
// combinedValues = printResult;

console.log(combinedValues(8,8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});