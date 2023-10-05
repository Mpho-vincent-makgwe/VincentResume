import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const RecipeList = () => {
    
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
        useEffect(() => {
          const fetchRecipes = async (page:number) => {
            try {
              const response = await fetch(`/api/recipes?page=${page}`);
              if (response.ok) {
                const fetchedRecipes = await response.json();
                  setRecipes(fetchedRecipes.recipes);
                  console.log(recipes)
              } else {
                console.error("Failed to fetch recipes");
              }
            } catch (error) {
              console.error("Error fetching recipes:", error);
            }
          };

          fetchRecipes(currentPage);
        }, [currentPage]);
    
const handlePageChange = (newPage:number) => {
  setCurrentPage(newPage);
    };
    
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

return (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Recipes</h1>
    <ul>
      {recipes.map((recipe: any) => (
        <li key={recipe._id} className="bg-purple-300 p-4 rounded shadow mb-4">
          <h2 className="text-2xl font-semibold">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.description}</p>
          <p className="text-gray-600">Prep Time: {recipe.prep} minutes</p>
          <p className="text-gray-600">Cook Time: {recipe.cook} minutes</p>
          <p className="text-gray-600">Category: {recipe.category}</p>
          <p className="text-gray-600">Servings: {recipe.servings}</p>
          <p className="text-gray-600">
            Published: {new Date(recipe.published).toLocaleDateString()}
          </p>
          <h3 className="mt-2 text-lg font-semibold">Tags:</h3>
          <ul className="list-disc list-inside">
            {recipe.tags.map((tag: any, index: any) => (
              <li key={index} className="text-gray-600">
                {tag}
              </li>
            ))}
          </ul>
          <h3 className="mt-2 text-lg font-semibold">Images</h3>
          <ul className="list-disc list-inside">
            <Carousel responsive={responsive}>
              {recipe.images.map((image: any, index: any) => (
                <div key={index} className="text-gray-600">
                  <div>
                    <Image
                      src={image}
                      alt={recipe.title}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </ul>
          <h3 className="mt-2 text-lg font-semibold">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {Object.entries(recipe.ingredients).map(
              ([ingredient, amount]: any, index) => (
                <li key={index} className="text-gray-600">
                  {ingredient}: {amount}
                </li>
              )
            )}
          </ul>
          <h3 className="mt-2 text-lg font-semibold">Instructions</h3>
          <ul className="list-disc list-inside">
            {recipe.instructions.map((instruction: string, index: number) => (
              <li key={index} className="text-gray-600">
                {instruction}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <div className="flex justify-between mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  </div>
);
}

export default RecipeList;
