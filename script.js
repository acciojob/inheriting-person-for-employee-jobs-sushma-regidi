// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    // ✅ Cypress expects "and" instead of a comma
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call parent constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    // ✅ Keep comma format for job title, as test expects it this way
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// ✅ Make them accessible to Cypress
window.Person = Person;
window.Employee = Employee;


