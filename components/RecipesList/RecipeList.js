import React, { useState, useEffect } from "react";
import RecipeCard from "../Cards/RecipeCard";
import Link from "next/link";
import Loading from "../Loading/Loading";
import LoadMoreButton from "../Buttons/LoadMore/LoadMore";
import Tags from "../Cards/tags/Tags";
import ImageCarousel from "../Cards/ImageCarousal";
import Title from "../Cards/Title";
import StarEmpty from "../../Icons/Stars/StarEmpty";
import StarFilled from "../../Icons/Stars/StarFilled";
import { useTheme } from "../context/ThemeContext/ThemeContext";
const RecipeList = ({
  recipes,
  totalRecipes,
  loading,
  currentPage,
  setCurrentPage,
}) => {
  const [isHovered, setIsHovered] = useState(false); // I will use this later not now. I am planning to create modals with this code.
  const [recipeList, setRecipeList] = useState(recipes); // you need to set a certain recipe as your favourite so you need to know which one.
  const { theme } = useTheme();
  useEffect(() => {
    // Update recipeList when recipes prop changes
    setRecipeList(recipes);
  }, [recipes]);
  const cardStyle = {
    width: "100%", // Adjust the width as needed
    minHeight: "200px", // Adjust the height as needed
    transition: "transform 0.2s", // Add a smooth transition
    transform: isHovered ? "scale(1.1)" : "scale(1.0)", // Apply scale effect on hover
  };

  const handlePageChange = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const addToFavouritesHandler = (index) => {
    const updatedRecipeList = [...recipeList]; // Create a copy of the recipe list
    const updatedRecipe = { ...updatedRecipeList[index] }; // Create a copy of the specific recipe
    updatedRecipe.isFavourite = !updatedRecipe.isFavourite; // Toggle favorite status
    updatedRecipeList[index] = updatedRecipe; // Update the specific recipe in the copied list
    setRecipeList(updatedRecipeList); // Update the state with the modified list
  };

  return (
    <>
      <div className="items-center justify-center place-content-center">
        <h1 className="text-3xl font-bold font-dm_mono mb-4 items-center justify-center place-content-center">
          Recipes
        </h1>
      </div>
      <div className=" mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {loading ? (
          <Loading />
        ) : (
          <>
            {recipeList.map((recipe, index) => (
              <div
                className={`${
                  theme === "dark" ? "bg-stone-800" : "bg-awesome-colors-30"
                } font-thin text-xs container w-11/12 mx-auto px-4 h-fit-content rounded shadow-xl`}
                key={index}
              >
                <Title title={recipe.title} />
                <section className=" ">
                  <ImageCarousel images={recipe.images} title={recipe.title} />
                </section>
                <RecipeCard
                  style={cardStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  key={recipe._id}
                  recipe={recipe}
                />
                <Link
                  href={`/${encodeURIComponent(recipe.title)}`}
                  key={index}
                  className="bg-pink-600 rounded-sm hover-bg-red-500"
                >
                  View Recipe
                </Link>
                <Tags recipe={recipe} />
                <span onClick={() => addToFavouritesHandler(index)}>
                  {recipe.isFavourite ? <StarFilled /> : <StarEmpty />}
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="items-center justify-center place-content-center">
        <LoadMoreButton
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalRecipes={totalRecipes}
        />
      </div>
    </>
  );
};

export default RecipeList;
