export interface eventModel {
  id: number;
  triggeredBy: number;
  type: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}