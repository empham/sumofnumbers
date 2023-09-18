// sumFor, sumWhile, sumRecursion, and sumTheSimpleWay
function sumFor(list) {
  let i;
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursionRep(list, n) {
  if (n === list.length) {
    return 0;
  }
  return list[n] + sumRecursionRep(list, n + 1);
}
function sumRecursion(list) {
  const n = 0;
  return sumRecursionRep(list, n);
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

// Test
console.clear();
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheSimpleWay([1, 2, 3, 4]));
