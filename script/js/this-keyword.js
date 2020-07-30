// function People(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// const programmer = new People("John", 18, ["Coding", "Badminton", "Read Book"]);

// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.hobby);

// function People(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// People.prototype.intoMyself = function () {
//   setTimeout(function () {
//     console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age} tahun.`);
//     console.log(`Hobby saya adalah ${this.hobby}`);
//   }, 300)
// }

// const programmer = new People("John", 18, ["Coding", "Badminton", "Read Book"]);
// programmer.intoMyself();

// function People(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// People.prototype.intoMyself = function () {
//   setTimeout(() => {
//     console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age} tahun.`);
//     console.log(`Hobby saya adalah ${this.hobby}`);
//   }, 300)
// }

// const programmer = new People("John", 18, ["Coding", "Badminton", "Read Book"]);
// programmer.intoMyself();


// default parameter 

// function sayHello(name = "Jhon", greet = "Hello") {
//   console.log(`${greet} ${name}`);
// }

// sayHello();

const sayHello = (name = "Jhon", greet = "Hello") => console.log(`${greet} ${name}`);
sayHello("Jeff", "Hello");
sayHello();