import { NotificationTypeEnum } from "../../enum";
import { BaseNotificationStrategyInterface, EmailNotificationStrategy, SmsNotificationStrategy } from "./strategies";

export class NotificationStrategy {
    private strategy: BaseNotificationStrategyInterface;
    constructor(type: string) {
        this.strategy = this.setStrategy(type);
    }

    private setStrategy(type: string): BaseNotificationStrategyInterface {
        switch(type) {
            case NotificationTypeEnum.email:
                return new EmailNotificationStrategy();
            case NotificationTypeEnum.sms:
                return new SmsNotificationStrategy();
            default:
                throw new Error("Invalid notification type");
        }
    }

    public handle(payload: any) {
        this.strategy.handle(payload);
    }
}