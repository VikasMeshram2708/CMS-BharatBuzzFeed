import express, { Response, Request } from "express";
import connectToDb from "../helpers/connectToDb";

const HomePageController = async (req: Request, res: Response) => {
  await connectToDb();
  res.json({
    message: "from home API.",
  });
};

export default HomePageController;
