// console.log("Oke");

// async & await

// const getCoffee = () => {
//   return new Promise((resolve, reject) => {
//     const seeds = 100;
//     setTimeout(() => {
//       if (seeds >= 10) {
//         console.log("Coffee didapatkan");
//       } else {
//         console.log("Biji kopi habis");
//       }
//     }, 3000);
//   });
// }

// 
// function makeCoffee() {
//   getCoffee()
//     .then(coffee => {
//       console.log(coffee);
//     });
// }

// makeCoffee();

// async function makeCoffee() {
//   const coffee = await getCoffee();
//   console.log(coffee);
// }

// makeCoffee();

// async function makeCoffee() {
//   try {
//     const coffee = await getCoffee();
//     console.log(coffee);
//   } catch (rejectedReason) {
//     console.log(rejectedReason);
//   }
// }

// makeCoffee();



const state = {
  isCoffeeMakerReady: true,
  seedStocks: {
    arabica: 250,
    robusta: 60,
    liberica: 80
  }
}

const getSeeds = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (state.seedStocks[type] >= miligrams) {
      state.seedStocks[type] -= miligrams;
      resolve("Biji kopi didapatkan!");
    } else {
      reject("Maaf stock kopi habis!");
    }
  });
}

const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat!")
    } else {
      reject("Maaf mesin tidak dapat digunakan!");
    }
  })
}

const servingToTable = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Pesanan kopi sudah selesai!")
    }, 1000);
  })
}

async function reserveACoffee(type, miligrams) {
  try {
    const seeds = await getSeeds(type, miligrams);
    const coffee = await makeCoffee(seeds);
    const result = await servingToTable(coffee);
    console.log(result);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

reserveACoffee("liberica", 80);
