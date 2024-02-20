import { Response, Request } from "express";
import connectToDb from "../helpers/connectToDb";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { HOME_PAGE_LINK } = process.env;

const FilterNewsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await connectToDb();
    // query to DB
    const filteredData = await prisma.newsPost.findUnique({
      where: {
        id,
      },
    });

    return res.json({
      filteredData,
      success: true,
    });
  } catch (error) {
    return res
      .json({
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong try again failed to fetch the home page data.",
      })
      .status(500);
  }
};

export default FilterNewsController;
