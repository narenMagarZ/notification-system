import { InputTransactionInterface, TransactionInterface } from "../interface";
import { BaseRepository } from "./baseRepository";

export class TransactionRepository extends BaseRepository<InputTransactionInterface, TransactionInterface>{
  constructor() {
    super("transactions");
  }
}