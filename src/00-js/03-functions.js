/*eslint no-unused-vars: "off"*/

// Parameter default values

// More info: https://exploringjs.com/impatient-js/ch_callables.html#parameter-default-values

function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2);
// return => 10

multiply(5);
// return => 5

// Rest parameters

// More info: https://exploringjs.com/impatient-js/ch_callables.html#rest-parameters

function f(x, ...y) {
  return [x, y];
}

f("a", "b", "c");
// return => ["a", ["b", "c"]]

// Immediately-Invoked Function Expression (IIFE)

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const iife = (function iife() {
  let internal = 0;
  const external = 1;

  function doInternalThings() {
    internal = 2;
  }

  doInternalThings();

  return {
    external
  };
})();

const { external } = iife;

// More info: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// Module Pattern

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// More info: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

const module = (function iife() {
  let internal = 0;
  const external = 1;

  function doInternalThings() {
    internal = 2;
  }

  doInternalThings();

  return {
    external
  };
})();

console.log(module);
// return => {external: 1}
