import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://groupa:lQmUgiSqy13bPiSo@groupa.uyuxme9.mongodb.net/?retryWrites=true&w=majority";


    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });


export const DBConnection = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
export const getAllRecipes = async (
  client: any,
  skip: number,
  limit: number
) => {
  try {
    const db = await client.db("devdb");
    const allRecipes = await db
      .collection("recipes")
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray(); // Convert to an array for easier iteration
    return allRecipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
