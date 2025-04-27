export interface notificationModel {
  id: number;
  userId: number;
  eventId: number;
  notificationTemplateId: number;
  title: string;
  body: object;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}