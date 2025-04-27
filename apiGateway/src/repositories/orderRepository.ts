import { InputOrderInterface, OrderInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class OrderRepository extends BaseRepository<InputOrderInterface, OrderInterface>{
  constructor() {
    super("orders");
  }
}