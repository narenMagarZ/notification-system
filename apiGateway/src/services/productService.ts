import { ProductRepository } from "../repositories";

export class ProductService {
  private repository: ProductRepository;
  constructor() {
    this.repository = new ProductRepository();
  }
}