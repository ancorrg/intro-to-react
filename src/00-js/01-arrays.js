/*eslint no-unused-vars: "off"*/

// More info: https://flaviocopes.com/javascript-array/

const team = ["Lisa", "Peter", "Anna"];

// [].map()

team.map((player, index) => `${player} ${index}`);
// return => ["Lisa 0", "Peter 1", "Anna 2"]
// team => ["Lisa", "Peter", "Anna"]

// [].filter()

team.filter((player) => player !== "Peter");
// return => ["Lisa", "Anna"]
// team => ["Lisa", "Peter", "Anna"]

// [].concat()

team.concat(["Paul", "Sofia"]);
// return => ["Lisa", "Peter", "Anna", "Paul", "Sofia"]
// team => ["Lisa", "Peter", "Anna"]

// [].forEach()

team.forEach((player, index) => console.log(player, index));
/* return =>
    Lisa 0
    Peter 1
    Anna 2
 */
// team => ["Lisa", "Peter", "Anna"]
