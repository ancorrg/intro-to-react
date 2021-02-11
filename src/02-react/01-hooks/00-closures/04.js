const add = (function () {
  let count = 0;
  // closure over count
  return function () {
    count += 1;
    return count;
  };
})(); // IIFE (Immediately Invoked Function Expression)

console.log(add());
console.log(add());

// count = 5;
// ReferenceError: assignment to undeclared variable count

console.log(add());
