import React, { useState } from 'react';

const PhotoWithPopup = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const {prop1} = props;
    
  const handlePhotoClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <img
        src={prop1}
        alt="photo"
        onClick={handlePhotoClick}
        style={{ cursor: 'pointer' }}
      />

      {showPopup && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            zIndex: 1,
          }}
        >
          <p>This is the box of text that pops up!</p>
        </div>
      )}
    </div>
  );
};

export default PhotoWithPopup;
