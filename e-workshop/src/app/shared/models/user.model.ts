import { Job } from './job.mode';

export class User {
  public idNumber: number;
  public firstName: string;
  public lastName: string;
  public phone: number;
  public email: string;
  public jobs: Job[];
}
