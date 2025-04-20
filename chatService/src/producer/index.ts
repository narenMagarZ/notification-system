import IoRedis from 'ioredis';
import { redisOptions } from '../config';
import { RedisChannelEnum } from '../enum';

class RedisPubSub {
  private static instance: RedisPubSub;
  private redis: IoRedis;
  private constructor() {
    this.redis = new IoRedis(redisOptions);
  }
  public static get() {
    if(!RedisPubSub.instance) {
      RedisPubSub.instance = new RedisPubSub();
    }
    return RedisPubSub.instance
  }

  public async sendChatMessage(payload: any): Promise<number> {
    return this.redis.publish(RedisChannelEnum.chat, payload);
  }

}

const redisPubSub = RedisPubSub.get();
export { redisPubSub as RedisPubSub };
