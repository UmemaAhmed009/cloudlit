import React from "react";
import styles from '../styles/Roadmap.module.css';
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'



const Roadmap = () => {
  return (
    <div id="Roadmap">
    <div className={styles["roadmap-container"]}>
      <div className={styles.content}>
        <h1><b>
        <span className={styles["content-h1"]}>Roadmap To Your Successful DevOps Transformation Journey&nbsp;
        </span></b>
        </h1>
        {/* <h1 className={styles["coloured-content"]}>Custom Software Development </h1>
        <h1 className ={styles["content-h1"]}>&nbsp;Success</h1> */}
        <p className = {styles.paragraph}>Protonshub offers its clients first-rate results at every stage of the product development process when starting fresh. To give you a smooth software development service in US
          we believe in making improvements at every stage.
        </p>
        {/* <IconButton>Connect now</IconButton> */}
      </div>
      <div className={styles["box-container"]}>
        <div className={styles.box}>
        {/* <FontAwesomeIcon icon={solid("1")} /> */}
        {/* <div className={styles.circle}> */}
        <FontAwesomeIcon icon={solid("1") } className={styles.icon1} />
        {/* </div> */}
        <div className={styles["box-content"]}>
        <b><h1 className={styles["box-heading"]}> Three steps to renew</h1></b>
        <p className={styles["box-para"]}>Renew your certification for free in three simple steps.</p>
        </div>
        </div>
        <div className={styles.box}>
        {/* <div className={styles.circle}> */}
        <FontAwesomeIcon icon={solid("2") } className={styles.icon2} />
        {/* </div> */}
        <div className={styles["box-content"]}>
        <b><h1 className={styles["box-heading"]}>Connect your profiles</h1></b>
        <p className={styles["box-para"]}>Connect your Microsoft Learn profile with your certification profile.</p>
        </div>
        </div>
        <div className={styles.box}>
        {/* <div className={styles.circle}> */}
        <FontAwesomeIcon icon={solid("3") } className={styles.icon3} />
        {/* </div> */}
        <div className={styles["box-content"]}>
        <b><h1 className={styles["box-heading"]}> Refresh your skills</h1></b>
        <p className={styles["box-para"]}>Prepare for the renewal assessment with free, self-paced modules.</p>
        </div>
        </div>
        <div className={styles.box}>
        {/* <div className={styles.circle}> */}
        <FontAwesomeIcon icon={solid("4") } className={styles.icon4} />
        {/* </div> */}
        <div className={styles["box-content"]}>
        <b><h1 className={styles["box-heading"]}>Pass the assessment</h1></b>
        <p className={styles["box-para"]}>Pass the free, unproctored, online assessment before your certification expires.</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Roadmap;
