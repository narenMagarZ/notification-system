export interface transactionModel {
  id: number;
  debit: number;
  credit: number;
  status: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}