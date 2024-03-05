/*
// 1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console. 

// Function
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

console.log(describeCountry("USA", 300, "Washington D.C"));
console.log(describeCountry("France", 14, "Paris"));
console.log(describeCountry("Israel", 9, "Tel Aviv"));

// Function Declarations vs. Expressions
/* 1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, 
 and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, 
 so it's about 18.2% of the world population.
  2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100./*

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// 3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

const israel = percentageOfWorld1(15);
const USA = percentageOfWorld1(300);
const France = percentageOfWorld1(25);

console.log(israel);
console.log(USA);
console.log(France);

// 4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

const percentageOfWolrd2 = function (population) {
  return (population / 7900) * 100;
};

const germany = percentageOfWolrd2(35);
const England = percentageOfWolrd2(45);
const ireland = percentageOfWolrd2(45);

console.log(germany);
console.log(England);
console.log(ireland);


// Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percChina3 = percentageOfWorld3(1441);
const perUSA3 = percentageOfWorld3(332);
const percPortugal3 = percentageOfWorld3(10);

console.log(perUSA3, percChina3, percPortugal3);
*/
