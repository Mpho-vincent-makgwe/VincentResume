import ImageCarousel from "../Cards/ImageCarousal";
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
    <div className="container mx-auto p-4 bg-gradient-to-r from-green-500 from-10% via-sky-500 via-30% to-pink-500 to-90% ">
      <h1 className="text-3xl font-bold mb-4">Recipe</h1>
      <ul>
        <li key={recipe._id} className="bg-amber-600 p-4 rounded shadow mb-4">
          <section className="list-disc list-inside ">
            <ImageCarousel images={recipes.images} title={recipes.title} />
          </section>
          <RecipeCard recipe={recipes} />
          <TotalTime totalTime={recipes} />
          <Ingredints ingredientsList={ingredientsList} />
          <RecipeInstructions recipes={recipes} instructions={recipes.instructions
} />
        </li>
      </ul>
    </div>
  );
};

export default Recipe;
