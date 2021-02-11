function addFactory() {
  let count = 0;
  /* closure over count */
  return function () {
    count += 1;
    return count;
  };
}

const add = addFactory();

console.log(add());
console.log(add());

// count = 5;
// ReferenceError: assignment to undeclared variable count

console.log(add());
