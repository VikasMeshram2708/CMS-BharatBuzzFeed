import express, { Response, Request } from "express";

const HomePageController = (req: Request, res: Response) => {
  res.json({
    message: "from home API.",
  });
};

export default HomePageController;
