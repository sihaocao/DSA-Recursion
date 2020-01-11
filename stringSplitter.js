// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
// Don't use JS array's split function to solve this problem.

const stringSplitter = (str) => {
    if (str.length === 1) {
        return str;
    }
    stringSplitter(str.slice(1))
    return [...str]
}
stringSplitter('This is a recursion exercise');