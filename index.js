class Car {
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }

    getDescription(){
        return `${this.year} ${this.make} ${this.moder}`
    }
}


class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }

    getDescription() {
        return `${this.year} ${this.make} ${this.model} - Range: ${this.range} miles`;
    }
}

// An instance of ElectricCar with Ta Tesla model
const teslaModelS = new ElectricCar("Tesla", "Model S", 2019, 300);

// Call getDescription method on the instance
const description = teslaModelS.getDescription();

console.log(description);
