import { INotificationChannel, ILogger } from "../core/interfaces";
import { User } from "../models/User";

export class PushNotification implements INotificationChannel {
  constructor(private logger: ILogger) {}

  send(user: User, message: string): void {
    this.logger.log(`Sending PUSH to ${user.getDeviceToken()}`);
    console.log(`Push sent to ${user.getDeviceToken()}: ${message}`);
  }
}
