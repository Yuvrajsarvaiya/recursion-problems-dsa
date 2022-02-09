// palindrome iterative
function palindrome(string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;

  while (leftIndex < rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }
  return true;
}

// palindrome recursive
function palindromeRecursive(string, leftIndex = 0, rightIndex) {
  if (rightIndex == undefined) rightIndex = string.length - 1;
  if (leftIndex > rightIndex) return true;
  if (string[leftIndex] !== string[rightIndex]) return false;
  return palindromeRecursive(string, leftIndex + 1, rightIndex - 1);
}

console.log(palindromeRecursive("abcba"));
console.log(palindrome("abcde"));
console.log(palindromeRecursive("madam"));
console.log(palindromeRecursive("abcd"));
