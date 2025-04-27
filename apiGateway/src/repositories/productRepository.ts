import { ProductInterface, InputProductInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class ProductRepository extends BaseRepository<InputProductInterface, ProductInterface>{
  constructor() {
    super("products");
  }
}