/* eslint-disable */

// More info: https://flaviocopes.com/javascript-variables/

// let & const

// answers: ✔️, ❌

// const

/* Primitive Values */

const value = 3;

value = 5; // 🤷‍♀️ ??

/* Reference Values */

const dog = {
  name: "Rex",
  age: 4
};

dog.name = "Max"; // 🤷‍♀️ ??

dog = {
  name: "Rex",
  age: 4
}; // 🤷‍♀️ ??

const team = ["Lisa", "Peter", "Anna"];

team.push("Gregor"); // 🤷‍♀️ ??

team = []; // 🤷‍♀️ ??

// let

/* Primitive Values */

let index = 0;

index = 3; // 🤷‍♀️ ??

/* Reference Values */

let cat = {
  name: "Oreo",
  age: 1
};

cat.age = 2; // 🤷‍♀️ ??

cat = {
  name: "Sam",
  age: 3
}; // 🤷‍♀️ ??

let numbers = [0, 1, 2];

numbers.push(3); // 🤷‍♀️ ??

numbers = []; // 🤷‍♀️ ??
