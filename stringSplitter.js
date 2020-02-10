// Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
// Don't use JS array's split function to solve this problem.

function stringSplitter(str, sep) {
  let idx = str.indexOf(sep);
  if (idx === -1) {
    return [str];
  } else {
    return [str.slice(0, idx)].concat(
      stringSplitter(str.slice(idx + sep.length), sep)
    );
  }
}
stringSplitter('02/20/2020', '/');
