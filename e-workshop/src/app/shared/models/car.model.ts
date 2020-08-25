import { Client } from './client.model';

export class Car {
  constructor(
    public id: number,
    public owner: Client,
    public brand: string,
    public model: string,
    public color: string,
    public year: number,
    public plate: string
  ) {}
}
