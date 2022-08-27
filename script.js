"use strict";

// Задача--------------------------------------------------/

let isWeekend = (date) => {
  let dayOfWeek = new Date(date).getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }
  celebrate() {
    console.log("Happy Birthday, let's celebrate");
  }
}

class Employee extends Person {
  #salary = 0;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    console.log(this.#salary * 12);
  }
  celebrate() {
    const date = new Date(this.birthDayDate);
    const currentYear = new Date().getFullYear();
    if (isWeekend(date.setFullYear(currentYear))) {
      return super.celebrate();
    } else {
      return console.log("Happy Birthday, but I need to work");
    }
  }
}

let person1 = new Person("John", "Johnson", 33, "1989-02-03");
console.log(person1);
person1.celebrate();

let employee1 = new Employee(
  "Miroslav",
  "Kopitov",
  25,
  "1996-12-17",
  7000,
  "Developer"
);
console.log(employee1);
employee1.getYearSalary();
employee1.celebrate();
