import { factorial, repeat } from "./factorial";

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
}

let d = repeat(5, "a");
console.log(d);

let e = factorial(3);
console.log(e);
console.log("Hello Test");
/**
 * Function to generate a unique ID
 * This function initializes an empty string to store the ID
 * It generates a unique ID using the Math.random() function
 * The generated ID is then returned
 * @returns {string} The generated unique ID
 */
function generateUniqueId(): string {
  // Generate a unique ID using the Math.random() function
  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  // Return the generated ID
  return id;
}
