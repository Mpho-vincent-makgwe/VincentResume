import React, { useEffect, useState } from "react";

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
              } else {
                console.error("Failed to fetch recipes");
              }
            } catch (error) {
              console.error("Error fetching recipes:", error);
            }
          };

          fetchRecipes(currentPage);
        }, [currentPage]);
    
const handlePageChange = (newPage:any) => {
  setCurrentPage(newPage);
};
 return (
   <div>
     <h1>Recipes</h1>
     <ul className="bg-red-500">
       {recipes.map((recipe:any) => (
         <li key={recipe._id}>
           <h2>{recipe.title}</h2>
           <p>{recipe.description}</p>
           <p>Prep Time: {recipe.prep} minutes</p>
           <p>Cook Time: {recipe.cook} minutes</p>
           <p>Category: {recipe.category}</p>
           <p>Servings: {recipe.servings}</p>
           <p>Published: {new Date(recipe.published).toLocaleDateString()}</p>
               <h3>Tags:</h3>
        
           <ul className="bg-gray-500">
             {recipe.tags.map((tag:any, index:any) => (
               <li key={index}>{tag}</li>
             ))}
           </ul>
           <h3 className="font-bold underline text-clip">Ingredients:</h3>
           <ul>
             {Object.entries(recipe.ingredients).map(
               ([ingredient, amount]:any, index):any => (
                 <li key={index}>
                   {ingredient}: {amount}
                 </li>
               )
             )}
               </ul>
               
         </li>
       ))}
     </ul><div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </div>
 );
}

export default RecipeList;
