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
  2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

/* 3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.*/

const israel = percentageOfWorld1(15);
const USA = percentageOfWorld1(300);
const France = percentageOfWorld1(25);

console.log(israel);
console.log(USA);
console.log(France);

/* 4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).*/

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

// Functions Calling Other Functions
/* 1. Create a function called describePopulation. Use the function type you like the most. 
This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.*/
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
}

console.log(describePopulation("USA", 349));
console.log(describePopulation("Israel", 15));
console.log(describePopulation("Nedtherlands", 14));

// Intro to Arrays
/*Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. 
Store this array into a variable called populations.*/
const populations = [25, 450, 15, 32];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// Basic Array Operations (Methods)
//Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

const neighbors = ["Canada", "Mexico"];
console.log(neighbors);

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

neighbors.push("Utopia");
console.log(neighbors);

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

neighbors.pop("Utopia");
console.log(neighbors);

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

if (!neighbors.includes("Germany"))
  console.log("Probably not a central european country :D");
/*Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. 
For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

neighbors[neighbors.indexOf("Mexico")] = "Republic of Mexico";
console.log(neighbors);

// Introduction to Objects
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
const myCountry = {
  country: "USA",
  capital: "D.C.",
  language: "English",
  population: 350,
  neighbors: ["Canada, Mexico"],
};

// Dot vs. Bracket Notation
/* Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation. */
console.log(
  `${myCountry.country} has ${myCountry.population} million ${
    myCountry.language
  }-speaking people, ${
    myCountry.neighbors.length + 1
  } neighboring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// Object Methods
// 1. Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// 2. Call the describe method.
/* 3. Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. 
isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.*/
const myCountry2 = {
  country: "USA",
  capital: "D.C.",
  language: "English",
  population: 350,
  neighbors: ["Canada, Mexico"],

  describe: function () {
    console.log(
      `${this.country} has ${myCountry.population} million ${
        myCountry.language
      }-speaking people, ${
        this.neighbors.length + 1
      } neighboring countires and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

myCountry2.describe();
myCountry2.checkIsland();

console.log(myCountry2);

// Iteration: The for Loop
/* 1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, 
by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'. */

for (let voter = 1; voter < 51; voter++) {
  console.log(`Voter #${voter} is currently voting`);
}

// Looping Arrays, Breaking and Continuing
// 1. Let's bring back the populations array from a previous assignment.
// const populations = [25, 450, 15, 32];

// 2. Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.
const percentages2 = [];
for (let compute = 0; compute < populations.length; compute++) {
  const perc = percentageOfWorld1(populations[compute]);
  percentages2.push(perc);

  if (percentages[compute] === percentages2[compute]) console.log("true");
}
// 3. Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.
console.log(percentages);
console.log(percentages2);

// Looping Backwards and Loopsin Loops
// 1. Store this array of arrays into a variable called listOfNeighbours: [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++)
  for (
    let y = 0;
    y < listOfNeighbors[i].length;
    y++ // iterating columns by length of a certain row
  )
    console.log(`Neighbor: ${listOfNeighbors[i][y]}`);

// The while Loop
// 1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
