import { Redis } from '@upstash/redis';
import { logger } from '@/lib/logger';

interface CacheInterface {
  get<T>(key: string): Promise<T | null>;
  set(key: string, value: unknown, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

// No-op cache implementation when Redis is not configured
class NoOpCache implements CacheInterface {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  async get<T>(key: string): Promise<T | null> {
    return null;
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    // Deliberately empty
  }

  async delete(key: string): Promise<void> {
    // Deliberately empty
  }

  async exists(key: string): Promise<boolean> {
    return false;
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */

  async clear(): Promise<void> {}
}

// Redis cache implementation
class RedisCache implements CacheInterface {
  private redis: Redis;

  constructor(redis: Redis) {
    this.redis = redis;
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data as string) : null;
    } catch (error) {
      logger.error('Redis cache get error:', error);
      return null;
    }
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    try {
      const data = JSON.stringify(value);
      if (ttl) {
        await this.redis.setex(key, ttl, data);
      } else {
        await this.redis.set(key, data);
      }
    } catch (error) {
      logger.error('Redis cache set error:', error);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      await this.redis.del(key);
    } catch (error) {
      logger.error('Redis cache delete error:', error);
    }
  }

  async exists(key: string): Promise<boolean> {
    try {
      return await this.redis.exists(key) === 1;
    } catch (error) {
      logger.error('Redis cache exists error:', error);
      return false;
    }
  }

  async clear(): Promise<void> {
    try {
      await this.redis.flushall();
    } catch (error) {
      logger.error('Redis cache clear error:', error);
    }
  }
}

// Lazy-loaded cache instance
let cacheInstance: CacheInterface | null = null;

// Get or initialize cache instance
export function getCache(): CacheInterface {
  if (cacheInstance) return cacheInstance;

  const redisUrl = process.env.REDIS_URL;
  const redisToken = process.env.REDIS_TOKEN;

  if (!redisUrl || !redisToken) {
    logger.info('Redis not configured, using no-op cache');
    cacheInstance = new NoOpCache();
    return cacheInstance;
  }

  try {
    const redis = new Redis({
      url: redisUrl,
      token: redisToken
    });
    logger.info('Redis cache initialized');
    cacheInstance = new RedisCache(redis);
    return cacheInstance;
  } catch (error) {
    logger.error('Failed to initialize Redis cache:', error);
    cacheInstance = new NoOpCache();
    return cacheInstance;
  }
}

// Export a function that gets the cache instance
export const cache = {
  get: async <T>(key: string) => getCache().get<T>(key),
  set: async (key: string, value: unknown, ttl?: number) => getCache().set(key, value, ttl),
  delete: async (key: string) => getCache().delete(key),
  exists: async (key: string) => getCache().exists(key),
  clear: async () => getCache().clear()
}; 