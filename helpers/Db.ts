import { MongoClient } from "mongodb";

const { DATABASE_URL, DB_NAME } = process.env;

if (!DATABASE_URL) throw new Error("Database URI not found.");

const client = new MongoClient(DATABASE_URL);

const MongoConnect = async () => {
  try {
    await client.connect();
    console.log("Connected to DB Successfully.");
  } catch (error) {
    console.log("failed to connect to Db.");
  }
};

export const db = client.db(DB_NAME);
export default MongoConnect;
