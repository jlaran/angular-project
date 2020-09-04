export class Product {
  public _id: number;
  public name: string;
  public description: string;
  public amount: number;
  public price: number;

  constructor(product?: Partial<Product>) {
    Object.assign(this, product);
  }
}
