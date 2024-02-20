import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const connectToDb = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to DB Successfully.");
  } catch (error) {
    console.log("Something went wrong failed to connect to DB try again.");
  } finally {
    await prisma.$disconnect();
    console.log("Connection released.");
  }
};

export default connectToDb;
