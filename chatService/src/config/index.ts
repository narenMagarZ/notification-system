import { RedisOptions } from "ioredis";
import dotenv from "dotenv";
dotenv.config();

export const redisOptions: RedisOptions = {
  username: process.env.REDIS_USERNAME,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD
}

export const port: number = Number(process.env.PORT);