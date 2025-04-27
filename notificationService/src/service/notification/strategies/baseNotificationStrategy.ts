export interface BaseNotificationStrategyInterface {
    handle: (payload: any) => void;
}
export class BaseNotificationStrategy implements BaseNotificationStrategyInterface {
    handle(payload: any): void {
    }

}