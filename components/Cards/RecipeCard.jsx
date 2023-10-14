// RecipeCard.js
import { CookTime, PrepTime, Published, TotalTime } from "./TimeAndDate/Time";
import Description from "../Description/Description";
import Category from "./Category";
import { useTheme } from "../context/ThemeContext/ThemeContext";
const RecipeCard = ({ recipe }) => {
  const { theme } = useTheme();
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`font-eduNswActFoundation ${
        theme === "dark" ? "text-awesome-colors-50" : "text-brownish-red-10"
      }`}
    >
      <Description recipe={recipe.description} />
      <PrepTime prepTime={recipe.prep} />
      <CookTime cookTime={recipe.cook} />
      <TotalTime totalTime={recipe} />
      <Category Category={recipe.category} />
      <p className=" transform translate-x-0 hover:translate-x-2 transition-transform duration-300 ease-in-out">
        <b>Servings:</b> {recipe.servings}
      </p>
      <Published published={recipe.published} />
    </div>
  );
};

export default RecipeCard;
