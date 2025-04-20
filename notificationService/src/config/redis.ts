import IoRedis from "ioredis";
import { redisOptions } from ".";

class Redis {
  private static instance: Redis;
  private redis: IoRedis;
  private constructor() {
    this.redis = new IoRedis(redisOptions);
  }
  public static get() {
    if(!Redis.instance) {
      Redis.instance = new Redis();
    }
    return Redis.instance
  }

  public async set(key: string, value: string): Promise<string> {
    return this.redis.set(key, value);
  }

  public async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

}

const redis = Redis.get();
export { redis as Redis }
