// function Car(manufacture, color) {
//   this.manufacture = manufacture;
//   this.color = color;
//   this.enginesactive = false;
// }

// Car.prototype.startEngines = function () {
//   console.log("Mobil dinyalakan...!");
//   this.enginesactive = true;
// }

// Car.prototype.info = function () {
//   console.log("Manufacture: " + this.manufacture);
//   console.log("Color: " + this.color);
//   console.log("Engines: " + (this.enginesactive ? "Active" : "Inactive"));
// }
// var johnCar = new Car("Honda", "Red");
// johnCar.startEngines();
// johnCar.info();


//  class
class Car {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesactive = false;
  }

  startEngines() {
    console.log("Mobil dinyalakan...!");
    this.enginesactive = true;
  }

  info() {
    console.log("Manufacture: " + this.manufacture);
    console.log("Color: " + this.color);
    console.log("Engines: " + (this.enginesactive ? "Active" : "Inactive"));
  }
}

const johnCar = new Car("Honda", "Red");
const jeffCar = new Car("BMW", "Black");
johnCar.startEngines();
johnCar.info();
console.log("\n");
jeffCar.startEngines();
jeffCar.info();