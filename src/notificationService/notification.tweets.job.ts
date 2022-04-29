import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('notificationQueue')
export class sendNotificationFromTweetsJob {
  @Process()
  handle(job: Job) {
    const tweets = JSON.stringify(job.data.tweets);
    console.log({ tweets });
  }
}
