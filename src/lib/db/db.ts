import { Db, MongoClient } from "mongodb";
import { getEnv } from "@/utils/env";

const MONGODB_URI = getEnv("MONGODB_URI");
const MONGODB_DB = getEnv("MONGODB_DB");

type DatabaseConnection = {
  client: MongoClient;
  db: Db;
};

const createClient = () =>
  new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
  });

declare global {
  /* eslint-disable-next-line no-var */
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let cachedClientPromise: Promise<MongoClient> | null = null;

export async function connectToDatabase(): Promise<DatabaseConnection> {
  const isDevelopment = process.env.NODE_ENV === "development";

  let clientPromise: Promise<MongoClient>;

  if (isDevelopment) {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClient().connect();
    }

    clientPromise = global._mongoClientPromise;
  } else {
    if (!cachedClientPromise) {
      cachedClientPromise = createClient().connect();
    }

    clientPromise = cachedClientPromise;
  }

  try {
    const client = await clientPromise;

    return {
      client,
      db: client.db(MONGODB_DB),
    };
  } catch (error) {
    // Clear the cached promise so future requests can retry the connection.
    if (isDevelopment) {
      global._mongoClientPromise = undefined;
    } else {
      cachedClientPromise = null;
    }

    throw new Error("Failed to connect to MongoDB.", {
      cause: error,
    });
  }
}
