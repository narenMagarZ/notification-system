import { OrderRepository } from "../repositories";

export class OrderService {
  private repository: OrderRepository;
  constructor() {
    this.repository = new OrderRepository();
  }
}