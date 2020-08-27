import { Job } from './job.mode';
import { Quote } from './quote.model';
import { Car } from './car.model';

export class Client {
  public id: number;
  public name: string;
  public address: string;
  public email: string;
  public birthday?: number;
  public cars?: Car[];
  public quotes?: Quote;
  public jobs?: Job;
}
