// Write a recursive function that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each number between itself and 1.

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
factorial(5);

// Best Solution
const factorial = num => {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};
factorial(5);
