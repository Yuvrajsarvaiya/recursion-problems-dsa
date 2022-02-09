// countDown iterative
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

// // countDown Recursive
function countDownRecursive(n) {
  if (n === 0) return;
  console.log(n);
  countDownRecursive(n - 1);
}
