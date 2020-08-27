import { Product } from './product.model';
import { Client } from './client.model';
import { Car } from './car.model';

export class Quote {
  public id: number;
  public client: Client;
  public car: Car;
  public date: Date | string;
  public product: Product[];
  public total: number;
}
