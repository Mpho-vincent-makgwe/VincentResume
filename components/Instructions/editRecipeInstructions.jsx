import React, { useState } from "react";

const EditRecipeInstructions = ({ instructions, onSave }) => {
  const [newInstructions, setNewInstructions] = useState([...instructions]);
  const [currentInstruction, setCurrentInstruction] = useState("");

  const handleAddInstruction = () => {
    if (currentInstruction) {
      setNewInstructions([...newInstructions, currentInstruction]);
      setCurrentInstruction("");
    }
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...newInstructions];
    updatedInstructions.splice(index, 1);
    setNewInstructions(updatedInstructions);
  };

  const handleSaveChanges = () => {
    onSave(newInstructions);
  };

  return (
    <>
      <div className="flex">Edit recipe</div>
      <ol>
        {newInstructions.map((instruction, index) => (
          <li key={index}>
            <input
              type="text"
              value={instruction}
              onChange={(e) => {
                const updatedInstructions = [...newInstructions];
                updatedInstructions[index] = e.target.value;
                setNewInstructions(updatedInstructions);
              }}
            />
            <button
              className="bg-brownish-red-10"
              onClick={() => handleRemoveInstruction(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
      <ol>
        {" "}
        <input
          type="text"
          value={currentInstruction}
          onChange={(e) => setCurrentInstruction(e.target.value)}
        />
      </ol>

      <button onClick={handleAddInstruction}>Add New Instruction</button>
      <button
        className="flex bg-blue-500 hover-bg-blue-700 font-bold py-2 px-4 rounded"
        onClick={handleSaveChanges}
      >
        Save new edits
      </button>
    </>
  );
};

export default EditRecipeInstructions;
