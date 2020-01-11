// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.

const fibonacci = (num) => {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num-1) + fibonacci(num-2);
    }
}
fibonacci(7);



// Best Solution
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
fibonacci(7);