import express, { Response, Request } from "express";
import connectToDb from "../helpers/connectToDb";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { HOME_PAGE_LINK } = process.env;
const HomePageController = async (req: Request, res: Response) => {
  try {
    const response = await fetch(HOME_PAGE_LINK!);
    const result = await response.json();
    const newsData = result.data?.news_list;

    const items = newsData?.map((item: any) => ({
      newsTitle: item?.news_obj?.title,
      newsSlug: item?.news_obj?.old_hash_id,
      newsImageUrl: item?.news_obj?.image_url,
      newsType: item?.news_obj?.category_names[0],
      newsContent: item?.news_obj?.content,
      newsAuthor: item?.news_obj?.author_name,
      newsSource: item?.news_obj?.source_name,
      newsSourceUrl: item?.news_obj?.source_url,
    }));

    console.log("items", items.length);

    await connectToDb();
    // save to DB
    await prisma.newsPost.createMany({
      data: items,
    });

    return res.json({
      total_items: items.length,
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

export default HomePageController;
