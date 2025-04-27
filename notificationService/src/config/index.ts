import { RedisOptions } from "ioredis";
import dotenv from "dotenv";
import { PoolConfig } from "pg";
dotenv.config();

export const redisOptions: RedisOptions = {
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  lazyConnect: true
}

export const port: number = Number(process.env.PORT);

export const pgConfigOptions: PoolConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
}

export * from "./redis";
