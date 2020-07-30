import { coffeeStock, isCoffeeMakerReady } from "./state.js";

const displayStock = stock => {
  const coffeeStockListElement = document.querySelector('#coffee-stock-list');
  for (const type in stock) {
    const coffeeStockItemElement = document.createElement('li');
    coffeeStockItemElement.innerText = `${type}: ${stock[type]}`;
    coffeeStockListElement.appendChild(coffeeStockItemElement);
  }
}

const coffeeOrder = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (isCoffeeMakerReady) {
      if (coffeeStock[type] >= miligrams) {
        resolve(`Kopi ${type} berhasil dibuat!`);
      } else {
        reject("Maaf, stock kopi habis");
      }
    } else {
      reject("Mesin kopi sedan rusak!");
    }
  });
}

const coffeeOrderButtonHandler = async event => {
  const type = prompt("Kopi apa yang ingin dipesan?");
  const miligrams = prompt("Berapa miligrams?");
  try {
    const result = await coffeeOrder(type, miligrams);
    alert(result);
  } catch (rejectedReason) {
    alert(rejectedReason);
  }
}

const coffeeOrderButtonElement = document.querySelector('#coffee-order-button');
coffeeOrderButtonElement.addEventListener('click', coffeeOrderButtonHandler);

displayStock(coffeeStock);