// Unknown is better than any - there is some type checking

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// the code below would work with 'any' but won't work with unknown unless we do a check
// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
};

// In case of error the function doesn't return 'undefined' because the error crashes the code
// We can assign 'never' to let other developers know that this function will crash the code
// infinite loops will also result in never

generateError('An error occurred', 500);