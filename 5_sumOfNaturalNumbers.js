// Sum of N natural numbers

function sumOfNaturalNumbers(number) {
  let num = 1;
  let sum = 0;
  while (num <= number) {
    sum += num;
    num += 1;
  }
  return sum;
}

function sumOfNaturalNumbersRecursive(number, num = 0, sum = 0) {
  if (num === number) {
    return sum + num;
  }
  return sumOfNaturalNumbersRecursive(number, num + 1, sum + num);
}

function sumOfNaturalNumbersRecursive2(number, sum = 0) {
  if (number === 0) return sum;
  return sumOfNaturalNumbersRecursive2(number - 1, sum + number);
}

console.log(sumOfNaturalNumbersRecursive2(10));
console.log(sumOfNaturalNumbers(10));
console.log(sumOfNaturalNumbers(10));
