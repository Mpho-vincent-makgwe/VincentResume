// TagModal.js
import React from "react";

const TagModal = ({ tags, onClose }) => {
  return (
    // Add modal styling here, you can use a library like react-modal
    <div className="modal">
      <div className="modal-content">
        <h3>Tags:</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TagModal;
