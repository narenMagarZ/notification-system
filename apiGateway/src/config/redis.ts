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

  public async set() {
  }

  public async connect(): Promise<void> {
    try {
      this.redis.connect(() => {
        console.info("Redis connected successfully.")
      });
    } catch (error) {
      console.error("Failed to connect to redis server");
      throw error;
    }
  }

}

const redis = Redis.get();
export { redis as Redis }
