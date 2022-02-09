// Reversing string iteratively
function reverseString(string = "") {
  let outputString = [];
  for (let index = string.length - 1; index >= 0; index--) {
    outputString.push(string[index]);
  }
  return outputString.join("");
}

// Reversing string using recursion
function reverseStringRecursive(string, index, outputString = []) {
  if (index == undefined) {
    index = string.length - 1;
  } else if (index < 0) {
    return outputString.join("");
  }
  outputString.push(string[index]);
  return reverseStringRecursive(string, index - 1, outputString);
}

console.log(reverseString("hello"));
console.log(reverseStringRecursive("hello"));
