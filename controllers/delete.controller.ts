import { Response, Request } from "express";
import MongoConnect, { db } from "../helpers/Db";

const DeleteController = async (req: Request, res: Response) => {
  try {
    await MongoConnect();
    await db.dropDatabase();
    return res.json({
      message: "Successfully deleted the database.",
    });
  } catch (error) {
    return res.json({
      message:
        error instanceof Error
          ? error?.message
          : "Something went wrong failed to Delete the Database.",
    });
  }
};

export default DeleteController;
