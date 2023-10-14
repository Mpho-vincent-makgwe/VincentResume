import Images from "../Cards/Image";
import Ingredints from "../Cards/Ingredints";
import RecipeCard from "../Cards/RecipeCard";
import { TotalTime } from "../Cards/TimeAndDate/Time";
import RecipeInstructions from "../Instructions/RecipeInstructions";

const Recipe = ({ recipe }) => {
  const recipes = recipe;

  if (!recipes) {
    return <div>Loading...</div>;
  }

  const ingredientsList = Object.entries(recipes.ingredients);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Recipe</h1>
      <div className="shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 rounded shadow">
            <section>
              <Images images={recipes.images} title={recipes.title} />
            </section>
          </div>

          <div className="md:col-span-1 p-4 rounded shadow">
            <RecipeCard recipe={recipes} />
            <TotalTime totalTime={recipes} />
            <Ingredints ingredientsList={ingredientsList} />
          </div>

          <div className="md:col-span-1 p-4 rounded shadow">
            <RecipeInstructions
              recipes={recipes}
              instructions={recipes.instructions}
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Recipe;
