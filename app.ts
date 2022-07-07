// Literal type - when you tell TypeScript exactly which value you want (can be combined with literal type)

function combine (input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(20, 60, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '60', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Nadine', 'as-text');
console.log(combinedNames);