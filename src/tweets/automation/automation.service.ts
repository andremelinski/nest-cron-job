import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from '../entities/tweet.entity';
import { Cache } from 'cache-manager';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AutomationService {
  constructor(
    @InjectRepository(Tweet)
    private tweetModel: Repository<Tweet>,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    @InjectQueue('notificationQueue')
    private notificationQueue: Queue,
  ) {}

  private skip = 0;
  private take = 2;

  @Interval(5000)
  async countTweets() {
    this.skip = await this.cacheManager.get<number>('tweet-skip');
    this.skip = this.skip === undefined ? 0 : this.skip;
    const tweets = await this.tweetModel.find({
      skip: this.skip,
      take: this.take,
    });
    console.log({ skip: this.skip, take: this.take });
    console.log({ length: tweets.length, take: this.take });
    if (tweets.length === this.take) {
      this.cacheManager.set('tweet-skip', this.take + this.skip, {
        ttl: 1 * 60 * 2,
      });
    }
    console.log({ tweetsAutomation: tweets });
    this.notificationQueue.add({
      tweets: tweets.map((t) => {
        return { name: t.name, tweet: t.tweet };
      }),
    });
  }
}
