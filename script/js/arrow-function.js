// const upperizedNames = ["Intan", "Sarah", "Intari"]
//   .map(function (name) {
//     return name.toUpperCase();
//   });

// console.log(...upperizedNames);


// arrow function
// const upperizedNames = ["Intan", "Sarah", "Intari"]
//   .map(name => name.toUpperCase());

// console.log(...upperizedNames);

// function declaration dan reguler

// function sayHello(greet) {
//   console.log(`${greet}!`);
// }

// const sayName = function (name) {
//   console.log(`Nama Saya ${name}`);
// }

// const sayHello = greet => console.log(`${greet}`);

// const sayName = name => console.log(`Nama saya ${name}`);
// ["Intan", "Jeff", "Intari"].forEach(name => console.log(`Nama saya ${name}`));



const sayHello = language => {
  if (language.toUpperCase() === "INDONESIA") {
    return "Selamat Pagi!";
  } else if (language.toUpperCase() === "ENGLISH") {
    return "Good Morning!";
  } else {
    return "Hai!";
  }
}

console.log(sayHello("English"));