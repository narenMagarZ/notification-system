import IoRedis from 'ioredis';
import { Redis, redisOptions } from '../config';
import { RedisChannelEnum } from '../enum';

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
      switch(channel) {
        case RedisChannelEnum.chat:
          const payload : { roomId: string } = JSON.parse(message);
          await Redis.get(payload.roomId);
          break;
        default:
          throw new Error("Channel doesn't exist");
      }
    });
  }
}

const redisConsumer = RedisConsumer.get();
export { redisConsumer as RedisConsumer };
