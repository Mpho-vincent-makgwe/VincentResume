import React, { useState } from "react";

const Description = ({ recipe }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to shorten the text to a specific length
  const shortenText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // Function to toggle the modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <p className="text-gray-600">
        {shortenText(recipe, 50)}
        {recipe.length > 50 && <button className="bg-amber-800 rounded-md  font-bold fill-indigo-400 " onClick={toggleModal}>Read More</button>}
      </p>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>{recipe}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
