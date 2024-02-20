import { Response, Request } from "express";

const InvokeAllController = async (req: Request, res: Response) => {
  const InvokingLinks = [
    "http://localhost:5000/api/home-page",
    "http://localhost:5000/api/india-page",
    "http://localhost:5000/api/business-page",
    "http://localhost:5000/api/politics-page",
    "http://localhost:5000/api/sports-page",
    "http://localhost:5000/api/technology-page",
    "http://localhost:5000/api/startups-page",
    "http://localhost:5000/api/entertainment-page",
    "http://localhost:5000/api/hatke-page",
    "http://localhost:5000/api/international-page",
    "http://localhost:5000/api/automobile-page",
    "http://localhost:5000/api/science-page",
    "http://localhost:5000/api/travel-page",
    "http://localhost:5000/api/miscellaneous-page",
    "http://localhost:5000/api/fashion-page",
    "http://localhost:5000/api/education-page",
    "http://localhost:5000/api/health-page",
  ];
  try {
    const promises = InvokingLinks.map(async (url) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      return result;
    });

    const results = await Promise.all(promises);
    return res.json({
      success: true,
      results,
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

export default InvokeAllController;
