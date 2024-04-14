"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(vehicle) {
        this.vehicle = vehicle;
    }
    startEngine() {
        this.vehicle.isStarted = true;
    }
    getName() {
        return this.vehicle.name;
    }
}
exports.Car = Car;
//# sourceMappingURL=car.js.map