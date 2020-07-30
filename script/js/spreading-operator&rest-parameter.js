// (...)
// const favorites = ["Nasi Goreng", "Mie Goreng", "Ice Cream", "Jus Alpukat"];

// console.log(favorites);

// const favorites = ["Nasi Goreng", "Mie Goreng", "Ice Cream", "Jus Alpukat"];

// console.log(...favorites);

// const numbers = [12, 35, 80, 100, 9];

// console.log(Math.max(...numbers));


// const favorites = ["Nasi Goreng", "Mie Goreng", "Ice Cream", "Jus Alpukat"];

// const other = ["Cake", "Snack", "Coffee"];

// // console.log(favorites, other);

// const AllFavorites = [...favorites, ...other];
// console.log(AllFavorites);


// rest parameter

// function sum(...numbers) {
//   var result = 0;
//   for (let number of numbers) {
//     result += number
//   }
//   return result;
// }

// console.log(sum(1, 2, 3, 4, 5));


const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);