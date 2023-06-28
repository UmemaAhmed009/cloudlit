import React from "react";
import styles from '../styles/Roadmap.module.css';
import { IconButton } from "@mui/material";

const Roadmap = () => {
  return (
    <div className={styles["roadmap-container"]}>
      <div className={styles.content}>
        <h1 className={styles["content-h1"]}>Roadmap To Your&nbsp;</h1>
        <h1 className={styles["coloured-content"]}>Custom Software Development </h1>
        <h1 className ={styles["content-h1"]}>&nbsp;Success</h1>
        <p>Protonshub offers its clients first-rate results at every stage of the product development process when starting fresh. To give you a smooth software development service in US
          we believe in making improvements at every stage.
        </p>
        {/* <IconButton>Connect now</IconButton> */}
      </div>
      <div className={styles["box-container"]}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
};

export default Roadmap;
