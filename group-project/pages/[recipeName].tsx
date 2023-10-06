// // pages/[recipeName].tsx
// import { useRouter } from 'next/router';
// import { GetStaticProps, GetStaticPaths } from "next";
// import { fetchRecipeData } from "@/helpers/recipe-api";
// import Recipe from "@/components/Recipes/Recipe";
// // import { useEffect, useState } from "react";
// import { generateDynamicPaths } from "@/helpers/mongoDB-utils";

// import { useRouter } from "next/router";

// const RecipePage = ({ recipe }:any) => {
// console.log(recipe)
//   return <Recipe recipe={recipe} />;
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Generate dynamic paths based on your database items
//   const dynamicPaths = await generateDynamicPaths(); // Replace with your actual logic
//   // Ensure each path includes the "recipeName" parameter
//   return {
//     paths: dynamicPaths,
//     fallback: "blocking", // Set to true or 'blocking' if needed
//   };
// };
// export const getStaticProps = async (context) => {
//   try {
//     const recipeName = context.params?.recipeName;

//     if (!recipeName) {
//       throw new Error("Invalid recipeName");
//     }

//     const recipeData = await fetchRecipeData(recipeName as string); // Fetch data from MongoDB or your API
//     console.log(recipeData)
//     if (!recipeData) {
//       throw new Error("Recipe not found");
//     }

//     return {
//       props: {
//        recipeData,
//       },
//       revalidate: 6000, // Set revalidation time as needed
//     };
//   } catch (error) {
//     console.error("Error fetching recipe data:", error);
//     return {
//       props: {
//         recipeData: null, // Handle the error case
//       },
//     };
//   }
// };

// export default RecipePage;
import { useRouter } from "next/router";
import { fetchRecipeDataFromMongo } from "@/helpers/mongoDB-utils";
import Recipe from "@/components/Recipes/Recipe";
const RecipePage = ({ recipe }:any) =>{
const router = useRouter();
const { recipeName } = router.query;
if(!recipe){
  console.log(`Can't find Recipe for:`,JSON.stringify(recipeName))
}
  return(
        <div>
          <Recipe recipe={recipe}/>
        </div>
  );
};
export const getServerSideProps=async({params}:any)=>{
  const recipeName = params.recipeName;
  const recipe = await fetchRecipeDataFromMongo(recipeName, 'recipes');

  return{
    props: { recipe },
  };
}

export default RecipePage;