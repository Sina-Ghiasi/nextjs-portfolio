import { MongoClient, Db } from "mongodb";

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
};

const MONGODB_URI = getEnv("MONGODB_URI");
const MONGODB_DB = getEnv("MONGODB_DB");

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (cachedClient) {
    return { client: cachedClient, db: cachedClient.db(MONGODB_DB) };
  }

  const client = new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
  });

  await client.connect();
  cachedClient = client;

  return { client, db: client.db(MONGODB_DB) };
}
