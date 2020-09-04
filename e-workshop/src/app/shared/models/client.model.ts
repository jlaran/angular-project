import { Car } from './car.model';

export class Client {
  public _id: string;
  public idNumber: number;
  public firstName: string;
  public lastName: string;
  public phone: number;
  public email: string;
  public address: string;
  public cars: Car[];

  constructor(client?: Partial<Client>) {
    Object.assign(this, client);
  }
}
