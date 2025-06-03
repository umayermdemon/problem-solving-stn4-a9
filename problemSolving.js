// 1.Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const persons = [
  {
    name: "Jannat",
    age: 5,
    gender: "female",
  },
  {
    name: "Hossain",
    age: 3,
    gender: "male",
  },
  {
    name: "Usama",
    age: 3,
    gender: "male",
  },
  {
    name: "Jayan",
    age: 1,
    gender: "male",
  },
  {
    name: "Sumaiya",
    age: 0.5,
    gender: "female",
  },
];

const getMaleName = (persons) => {
  return persons
    .filter((data) => data.gender != "female")
    .map((malePerson) => malePerson.name);
};

const maleName = getMaleName(persons);
console.log(maleName);

// 2.Task: Object Manipulation
// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Title 1", author: "Author 1", year: "2012" },
  { title: "Title 2", author: "Author 2", year: "2013" },
  { title: "Title 3", author: "Author 3", year: "2014" },
];

const getBookTitles = (data) => {
  return data.map((book) => ({ title: book.title }));
};

const titles = getBookTitles(books);
console.log(titles);

// 3.Task: Function Composition
// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num) => num * num;

const double = (num) => num + num;

const add = (num) => num + 5;

const composedFunction = (num) => add(double(square(num)));

const result = composedFunction(5);
console.log(result);
// 4.Task: Sorting Objects
// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  {
    make: "bike 3",
    model: "Model 3",
    year: 1995,
  },
  {
    make: "bike 1",
    model: "Model 1",
    year: 1990,
  },
  {
    make: "bike 2",
    model: "Model 1",
    year: 1992,
  },
];
const sortCarsByYearAsc = (carsArray) => {
  return carsArray.slice().sort((a, b) => a.year - b.year);
};
const sort = sortCarsByYearAsc(cars);
console.log(sort);
// 5.Task: Find and Modify
// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const searchByName = (personsArray, name, newAge) => {
  const person = personsArray.find((p) => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return person;
};

const foundPerson = searchByName(persons, "Usama", 3);
console.log(foundPerson);

// 6.Task: Array Reduction
// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// 7. Task: Leap Year Checker
// -Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

// 8. Task: Unique Values
// -Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// 09.Task: Advanced Sorting
// -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

// 10. Task: Functional Programming - Reduce
// -Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
