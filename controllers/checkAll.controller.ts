import { Response, Request } from "express";
import MongoConnect, { db } from "../helpers/Db";

const CheckAllAPIController = async (req: Request, res: Response) => {
  //   const InvokingLinks = [
  //     "http://localhost:5000/api/home-page",
  //     "http://localhost:5000/api/india-page",
  //     "http://localhost:5000/api/business-page",
  //     "http://localhost:5000/api/politics-page",
  //     "http://localhost:5000/api/sports-page",
  //     "http://localhost:5000/api/technology-page",
  //     "http://localhost:5000/api/startups-page",
  //     "http://localhost:5000/api/entertainment-page",
  //     "http://localhost:5000/api/hatke-page",
  //     "http://localhost:5000/api/international-page",
  //     "http://localhost:5000/api/automobile-page",
  //     "http://localhost:5000/api/science-page",
  //     "http://localhost:5000/api/travel-page",
  //     "http://localhost:5000/api/miscellaneous-page",
  //     "http://localhost:5000/api/fashion-page",
  //     "http://localhost:5000/api/education-page",
  //     "http://localhost:5000/api/health-page",
  //   ];
  try {
    await MongoConnect();
    const allCollections = await db.listCollections().toArray();
    const collectionDetails = [];
    for (const collectionInfo of allCollections) {
      const collectionName = collectionInfo.name;
      const count = await db.collection(collectionName).countDocuments();
      collectionDetails.push({ name: collectionName, count });
    }

    return res.json({
      success: true,
      collectionDetails,
      message: "Successfully invoked all the API's.",
    });
  } catch (error) {
    return res.json({
      message:
        error instanceof Error
          ? error?.message
          : "Something went invoke all the API's.",
    });
  }
};

export default CheckAllAPIController;
