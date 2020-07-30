// fungsi setTimeOut()

// console.log("Selamat datang!");
// setTimeout(() => {
//   console.log("Terimakasih sudah mampir, Silahkan datang kembali");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

// const coffee = new Promise();
// console.log(coffee);

// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = true;
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan!");
//   }
// }

// const makeCoffee = new Promise(executorFunction);
// console.log(makeCoffee);


// .then

// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = false;
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan!");
//   }
// }

// const handlerSuccess = coffee => {
//   console.log(coffee);
// }

// const handlerRejected = error => {
//   console.log(error);
// }

// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then(handlerSuccess, handlerRejected);


// onRejected with catch method
// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = false;
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan!");
//   }
// }

// const handlerSuccess = coffee => {
//   console.log(coffee);
// }

// const handlerRejected = error => {
//   console.log(error);
// }

// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then(handlerSuccess)
//   .catch(handlerRejected);


// const state = {
//   isCoffeeMakerReady: true,
//   seedStocks: {
//     arabica: 250,
//     robusta: 60,
//     liberica: 80
//   }
// }

// const getSeeds = (type, miligrams) => {
//   return new Promise((resolve, reject) => {
//     if (state.seedStocks[type] >= miligrams) {
//       state.seedStocks[type] -= miligrams;
//       resolve("Biji kopi didapatkan!");
//     } else {
//       reject("Maaf stock kopi habis!");
//     }
//   });
// }

// const makeCoffee = () => {
//   return new Promise((resolve, reject) => {
//     if (state.isCoffeeMakerReady) {
//       resolve("Kopi berhasil dibuat!")
//     } else {
//       reject("Maaf mesin tidak dapat digunakan!");
//     }
//   })
// }

// const servingToTable = () => {
//   return new Promise(resolve => {
//     resolve("Pesanan kopi sudah selesai!")
//   })
// }

// function reserveACoffee(type, miligrams) {
//   getSeeds(type, miligrams)
//     .then(makeCoffee)
//     .then(servingToTable)
//     .then(resolvedValue => {
//       console.log(resolvedValue);
//     })
//     .catch(rejectedReason => {
//       console.log(rejectedReason);
//     })
// }

// reserveACoffee("liberica", 80);


// Promise.all()

// const arabicaOrder = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Kopi arabika selesai!");
//     }, 4000);
//   })
// }

// const robustaOrder = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Kopi robusta selesai!");
//     }, 3000);
//   })
// }

// const libericeOrder = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Kopi liberica selesai!");
//     }, 2000);
//   })
// }

// const promises = [arabicaOrder(), robustaOrder(), libericeOrder()];
// Promise.all(promises).then(coffee => {
//   console.log(coffee);
// });
