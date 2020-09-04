import { Quote } from './quote.model';
import { User } from './user.model';
import { Client } from './client.model';
import { Car } from './car.model';

export class Job {
  public _id: string;
  public jobNumber: number;
  public status: [{
    statusPercentage: number,
    statusDescription: string}
  ];
  public comments: [string];
  public date: Date | string;
  public price: number;
  public user: User[];
  public quotes: Quote[];
  public car: Car[];
  public client: Client[];
  // public services: Service[];

  constructor(job?: Partial<Job>) {
    Object.assign(this, job);
  }
}
