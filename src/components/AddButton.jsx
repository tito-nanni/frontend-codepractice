import React, { useState } from 'react';
import ThankYouScreen from './ThankYouScreen';


const addButton = ({ addClick }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleButtonClick = () => {
    addClick();
    setShowThankYou(true);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Submit</button>
      {showThankYou && <ThankYouScreen />}
    </div>
  )
}

export default addButton
