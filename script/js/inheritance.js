// class Car {
//   constructor(licensePlate, manufacture, wheels) {
//     this.licensePlate = licensePlate;
//     this.manufacture = manufacture;
//     this.wheels = wheels;
//     this.enginesactive = true;
//   }

//   startEngines() {
//     console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan`);
//   }

//   info() {
//     console.log(`Mesin Kendaraan: ${this.licensePlate}`);
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Mesin: ${this.enginesactive ? "Active" : "Inactive"}`);
//   }

//   // droveOff() {
//   //   console.log(`Kendaraan ${this.licensePlate} melaju`);
//   // }

//   parking() {
//     console.log(`Kendaraan ${this.licensePlate} parkir!`)
//   }

//   // openDoor() {
//   //   console.log("Membuka pintu!");
//   // }
// }

// const jhonCar = new Car("B1221H", "Honda", 4)
// jhonCar.startEngines();
// jhonCar.info();
// jhonCar.parking();

class Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.wheels = wheels;
    this.enginesactive = true;
  }

  startEngines() {
    console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan`);
  }

  info() {
    console.log(`Mesin Kendaraan: ${this.licensePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.enginesactive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.licensePlate} parkir!`)
  }
}


class Car extends Vehicle {
  constructor(licensePlate, manufacture, wheels) {
    super(licensePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan ${this.licensePlate} melaju`);
  }

  openDoor() {
    console.log("Membuka pintu!");
  }

  info() {
    super.info();
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

const jhonCar = new Car("B1221H", "Honda", 4)
jhonCar.info();
jhonCar.startEngines();
jhonCar.parking();