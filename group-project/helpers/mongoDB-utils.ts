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

export const fetchRecipeDataFromMongo = async (recipeName: any,collection:string|any) => {
  try {
    // Establish a connection to MongoDB and select your database and collection
    const client = await DBConnection();
    const db = client.db("devdb");
    const collec = db.collection(collection);

    // Query for the recipe using the provided recipeId
    const recipeData = await collec.findOne({ title: recipeName });
    // Close the MongoDB connection
    client.close();
    return recipeData; // Return the retrieved recipe data
  } catch (error) {
    console.error("Error fetching recipe data from MongoDB:", error);
    throw error;
  }
};

export const generateDynamicPaths = async () => {
  try {
    const client = await DBConnection();
    const recipes = await getAllRecipes(client, 0, 5);
    const dynamicPaths = recipes.map((recipe: any) => ({
      params: { recipeName: recipe.title },
    }));
    console.log(dynamicPaths)
    return dynamicPaths;
  } catch (error) {
    console.error("Error generating dynamic paths:", error);
    throw error;
  }
};