// api/recipes.js (API route for fetching recipes with pagination)

import { getAllRecipes, DBConnection } from "@/helpers/mongoDB-utils";

const ITEMS_PER_PAGE = 10; // Adjust as needed

const handler = async (req: any, res: any) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    let client = await DBConnection();
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const recipesData = await getAllRecipes(client, skip, ITEMS_PER_PAGE);
    res.status(200).json({ recipes: recipesData });
    client.close();
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(408).json({ error: "Error fetching recipes" });
  } finally {
    let client = await DBConnection();
    if (client) {
      client.close();
    }
  }
};

export default handler;