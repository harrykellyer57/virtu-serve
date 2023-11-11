/* sophisticated_code.js */

// This code is a demonstration of a complex and elaborate JavaScript implementation
// It includes various advanced concepts and design patterns

// Utility function to generate a random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class definition for a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.make} ${this.model} (${this.year}) engine started.`);
  }

  stopEngine() {
    console.log(`${this.make} ${this.model} (${this.year}) engine stopped.`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  else
    return n * factorial(n - 1);
}

// Array of names
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Create an array of Person objects
const people = [];
for (let i = 0; i < 5; i++) {
  const name = names[getRandomInt(0, names.length - 1)];
  const age = getRandomInt(18, 70);
  const person = new Person(name, age);
  people.push(person);
}

// Iterate over the people array and greet each person
people.forEach(person => {
  person.greet();
});

// Create instances of Car
const car1 = new Car('Toyota', 'Camry', 2021);
const car2 = new Car('Honda', 'Accord', 2022);

// Start and stop the engine of car1
car1.startEngine();
car1.stopEngine();

// Calculate the factorial of a random number between 1 and 10
const num = getRandomInt(1, 10);
const result = factorial(num);

console.log(`Factorial of ${num} is ${result}.`);

// Add other complex and elaborate code below...


// ...

// End of code.