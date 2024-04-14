import {Vehicle} from "./vehicle";

export class Car {

    constructor(
        private readonly vehicle?: Vehicle,
    ) {
    }

    startEngine(): void{
        this.vehicle.isStarted = true;
    }

    // sudah tidak berlaku karena set dilakukan di constructor
    // setName(name: string): void{
    //     this.vehicle.name = name;
    // }

    getName(): string{
        return this.vehicle.name;
    }

}