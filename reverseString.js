// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(string) {
    if (string === '') {
        return '';
    } else {
        console.log(string.substr(1), string[0]);
        return reverseString(string.substr(1)) + string[0];
    }
}
reverseString('Hello');



// Best Solution
function reverseString(string) {
    const arr = string.split('');
    if (arr.length === 1) {
        return arr[0];
    } else {
        return reverseString(arr.slice(1).join('')) + arr[0];
    }
}
reverseString('Hello');



function reverseString(string) {
    if (string === '') {
        return '';
    } else {
        return reverseString(string.substring(1)) + string.charAt(0);
    }
}
reverseString('Hello');