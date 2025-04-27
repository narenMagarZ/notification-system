import IoRedis from 'ioredis';
import { Redis, redisOptions } from '../config';
import {NotificationTypeEnum, RedisChannelEnum} from '../enum';
import {NotificationStrategy} from "../service";
import {RedisMessageInterface} from "../interfaces";

class RedisConsumer {
  private static instance: RedisConsumer;
  private redis: IoRedis;

  private constructor() {
    this.redis = new IoRedis(redisOptions);
  }

  public static get() {
    if(!RedisConsumer.instance) {
      RedisConsumer.instance = new RedisConsumer();
    }
    return RedisConsumer.instance
  }

  public async subscribe() {
    this.redis.subscribe(RedisChannelEnum.chat, (error, count) => {
      if (error) console.error(error);
      if (count) console.info(`Redis subscription ${count} : chat`);
    })
    this.redis.on("message", async (channel, message) => {
      const payload: RedisMessageInterface = JSON.parse(message);
      const notificationStrategy = new NotificationStrategy(payload.type)
      notificationStrategy.handle(payload.body);
    });
  }
}

const redisConsumer = RedisConsumer.get();
export { redisConsumer as RedisConsumer };
