import React from "react";
import trainImage from "../../Images/unstopTrain.png";
import styles from "./train.module.css";

const Train = () => {
  return (
    <div className={styles.train}>
      <img src={trainImage} alt="Train" id="trainImg" />
    </div>
  );
};

export default Train;
