class Vehicle {
  constructor(lisencePlate, manufacture, wheels) {
    this.lisencePlate = lisencePlate;
    this.manufacture = manufacture;
    this.wheels = wheels;
    this.enginesActive = true;
  }

  startEngines() {
    console.log(`Mesin Kendaraan: ${this.lisencePlate} dinyalakan`);
  }

  info() {
    console.log(`Mesin kendaraan: ${this.lisencePlate}`);
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Mesin: ${this.enginesActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan : ${this.lisencePlate} parkir!`);
  }
}

class Car extends Vehicle {
  constructor(lisencePlate, manufacture, wheels) {
    super(lisencePlate, manufacture);
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Kendaraan: ${this.lisencePlate} melaju!`);
  }

  openDoor() {
    console.log(`Membuka pintu`);
  }

  info() {
    super.info();
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

class Motorcycle extends Vehicle {
  droveOff() {
    console.log(`Kendaraan: ${this.lisencePlate} melaju!`);
  }

  info() {
    super.info();
    console.log(`Jumlah roda: ${this.wheels}`);
  }
}

class VehicleFactory {
  static repair(vehicles) {
    vehicles.forEach(vehicle => {
      console.log(`Kendaraan ${vehicle.lisencePlate} sedang melakukan perawatan`)
    })
  }
}

const jeffMotor = new Motorcycle("T1234MB", "Honda", 2);
const jeffCar = new Car("B1221K", "Honda", 4);
VehicleFactory.repair([jeffCar, jeffMotor]);