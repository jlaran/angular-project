export class NewClient {
  public idNumber: number;
  public firstName: string;
  public lastName: string;
  public phone: number;
  public email: string;
  public address: string;
  public password: string;
  public confirmationPassword: string;

    constructor(newClient?: Partial<NewClient>) {
      Object.assign(this, newClient);
    }
}


