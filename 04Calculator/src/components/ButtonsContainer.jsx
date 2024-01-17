// In your ButtonsContainer component
import React from 'react';
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonsNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName, index) => (
        <button key={index} className={styles.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
