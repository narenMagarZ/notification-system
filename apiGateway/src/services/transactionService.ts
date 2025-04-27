import { TransactionRepository } from "../repositories";

export class TransactionService {
  private repository: TransactionRepository;
  constructor() {
    this.repository = new TransactionRepository();
  }
}