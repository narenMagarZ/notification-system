export interface orderModel {
  id: number;
  userId: number;
  productId: number[];
  quantity: number;
  totalAmount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}