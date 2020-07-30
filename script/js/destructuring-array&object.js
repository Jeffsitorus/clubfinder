// const course = [
//   {
//     "id": 14,
//     "title": "Menjadi Android Developer Expert",
//     "author": "Google ATP"
//   },
//   {
//     "id": 51,
//     "title": "Belajar Membuat Aplikasi Android untuk Pemula",
//     "author": "Google ATP"
//   },
//   {
//     "id": 74,
//     "title": "Membangun Progressive Web Apps",
//     "author": "Codepolitan"
//   },
//   {
//     "id": 123,
//     "title": "Belajar Dasar Pemrograman Web",
//     "author": "Dicoding Indonesia"
//   }
// ]

// console.log(course);


// const profile = {
//   firstName: "Jefri",
//   lastName: "Sitorus",
//   age: 22,
// }

// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;

// console.log(`${firstName} ${lastName}, ${age} tahun`);


// const profile = {
//   firstName: "Jefri",
//   lastName: "Sitorus",
//   age: 22,
// }

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);



// default values
// const profile = {
//   firstName: "Jefri",
//   lastName: "Sitorus",
//   age: 22,
// }

// const { firstName, lastName, isMale } = profile;
// const { firstName, lastName, isMale = "Male" } = profile;

// console.log(firstName);
// console.log(lastName);
// console.log(isMale);


// const profile = {
//   firstName: "Jefri",
//   lastName: "Sitorus",
//   age: 22
// }

// const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);



// destructuring array

// const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Rendang"];

// const [firstFood, secondFood, ThirdFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(ThirdFood);


// destructuring assigment
// const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Rendang"];

// let myFood = "Ice Cream";
// let herFood = "Jus Alpukat";

// [myFood, herFood] = favorites;
// console.log(myFood);
// console.log(herFood);

const favorites = ["Nasi Goreng"];

// [myFood, herFood] = favorites;
[myFood, herFood = "Mie Goreng"] = favorites;

console.log(myFood);
console.log(herFood);
