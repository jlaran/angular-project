import { Job } from './job.mode';

export class User {
  public _id: string;
  public idNumber: number;
  public firstName: string;
  public lastName: string;
  public phone: number;
  public email: string;
  public jobs: Job[];

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
