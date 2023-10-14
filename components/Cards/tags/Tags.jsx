// Tags.js
import React, { useState } from "react";
import TagModal from "./TagModal";

const Tags = ({ recipe }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  const openModal = (tag) => {
    setSelectedTag(tag);
    setIsModalOpen(true);
  };

  return (
    <div>

      <div className="list-disc flex list-inside space-y-2">
        <button
          onClick={() => openModal(recipe.tags)} // Pass all tags to the modal
          className="text-gray-600 scroll-smooth snap-both cursor-pointer mt-2 text-lg font-semibold"
        >
          Show Tags
        </button>
      </div>

      {isModalOpen && (
        <TagModal
          tags={recipe.tags} // Pass all tags to the modal
          selectedTag={selectedTag} // Pass the selected tag
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Tags;
