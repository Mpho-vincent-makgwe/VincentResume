import { Fragment } from "react";
import EditRecipeInstructions from "./EditRecipeInstructions";
import { useLocalStorageState } from "@/storage/LocalStorage";

const RecipeInstructions = ({ recipes }) => {
  const [instructions, setInstructions] = useLocalStorageState('instructions', recipes.instructions);

  const handleSaveToLocalStorage = (updatedInstructions) => {
    setInstructions(updatedInstructions);
  };

  if (!recipes) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <h3 className="mt-2 text-lg font-semibold">Instructions</h3>
      <EditRecipeInstructions instructions={instructions} onSave={handleSaveToLocalStorage} />
    </Fragment>
  );
};

export default RecipeInstructions;
