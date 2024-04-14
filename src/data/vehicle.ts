import CarType from "./car-type";

export interface Vehicle{
    id: string;
    brand: string;
    type: CarType;
    engine: number;
    isStarted: boolean;
    name: string;
}