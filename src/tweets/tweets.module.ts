import { CacheModule, Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './entities/tweet.entity';
import { AutomationService } from './automation/automation.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forFeature([Tweet]), // inject on the children module
    BullModule.registerQueue({ name: 'emails' }), // register a queue
  ],
  controllers: [TweetsController],
  providers: [TweetsService, AutomationService],
})
export class TweetsModule {}
