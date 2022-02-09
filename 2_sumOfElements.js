// sumOfProduct Iterative
function sumOfProduct(array) {
  let total = 0;
  for (const element of array) {
    total += element;
  }
  return total;
}

// sumOfProduct using Recursion
function sumOfProductRecursive(array, index = 0, total = 0) {
  if (index >= array.length) return total;
  const value = array[index];
  return sumOfProductRecursive(array, index + 1, total + value);
}

console.log(sumOfProductRecursive([1, 2, 34, 4]));
console.log(sumOfProduct([1, 2, 34, 4]));
