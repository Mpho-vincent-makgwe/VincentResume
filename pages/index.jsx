import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipesList/RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [totalRecipes, setTotalRecipes] = useState(0); // Add totalRecipes state

  useEffect(() => {
    const fetchRecipes = async (page) => {
      try {
        const response = await fetch(`/api/recipes?page=${page}`);
        if (response.ok) {
          const fetchedRecipes = await response.json();
          setRecipes((prevRecipes) => [
            ...prevRecipes,
            ...fetchedRecipes.recipes,
          ]);
          setTotalRecipes(fetchedRecipes.totalRecipes);
          setLoading(false); // Set loading to false when data is fetched
        } else {
          console.error("Failed to fetch recipes");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes(currentPage);
  }, [currentPage]);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-red-200 to-fuchsia-300`}
    >
      <RecipeList
        recipes={recipes}
        totalRecipes={totalRecipes}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
