import { Client } from './client.model';

export class Car {
    public _id: string;
    public brand: string;
    public model: string;
    public color: string;
    public plate: string;
    public year: number;
    public owner: Client[];

    constructor(car?: Partial<Car>) {
      Object.assign(this, car);
    }
}
