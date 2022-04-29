import { Module } from '@nestjs/common';
import { sendNotificationFromTweetsJob } from './notification.tweets.job';

@Module({
  providers: [sendNotificationFromTweetsJob],
})
export class NotificationModule {}
