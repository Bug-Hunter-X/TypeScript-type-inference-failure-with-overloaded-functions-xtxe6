function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input type: Both parameters must be numbers.');
  }
  return a + b;
}

let result = add(5, 10); // Correct usage
console.log(result); // Output: 15

try {
  let incorrectResult = add(5, '10'); // Type error is now thrown at runtime 
  console.log(incorrectResult);
} catch (error) {
  console.error(error.message); //Output: Invalid input type: Both parameters must be numbers
}
//In this improved version, type checking is done explicitly during runtime to catch errors.  Consider using a more sophisticated type system library to handle runtime type checking in large projects.