class Vehicle {
    constructor(make, model, year) {
        console.log("INSIDE VEHICLE SUPERCLASS CONSTRUCTOR");
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        console.log('INSIDE CAR CONSTRUCTOR');
        super(make, model, year);
    }
    numWheels() {
        return 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        console.log('INSIDE MOTORCYCLE CONSTRUCTOR');
        super(make, model, year);
    }
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        console.log("INSIDE GARAGE CONSTRUCTOR");
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}

const myFirstVehicle = new Vehicle("Jeep", "Wrangler", 2017);
const myFirstCar = new Car("Hyundai", "Accent", 2013);
const myFirstMotorcycle = new Motorcycle("Suzuki", "V-Strom 650XT", 2021);
const garage = new Garage(2);