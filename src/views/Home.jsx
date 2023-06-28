import * as React from "react";
import styles from '../styles/Home.module.css'
import { Button, createTheme }  from '@mui/material';
import devOps from '../assets/2.png'


const Home = () => {

  return (
    <div className={styles.containerStyle}>
      <div className={styles.contentStyle}>
        <h3 className={styles.headingOneStyle}>- Welcome to Our agency</h3>
        <h1 className={styles.headingTwoStyle}>Smart Ideas for your brand are here</h1>
        <p className={styles.paragraghStyle}>Donec tincidunt lacinia diam, eu volutpat est sollicitudin at. Vestibulum ut mi tristi que, vulputate ante quis, tempus enim. Proin quis euismod purus. Suspen disse efficitur aliquam enim sed consequat vulputate ante quis. </p>
        <Button variant="contained" color="primary" className={styles.buttonStyle}>Discover More</Button>
        {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
      </div>
    <div className={styles.imageContainerStyle}>
      <div className={styles.imgStyle}>
        <img
            src={devOps} // Replace with the URL of your image
            alt="Circle Image"
            className={styles["circle-image"]}
            // style={{borderRadius: "40%"}}
          />
        </div>
    </div>

    </div>
  );
};

export default Home;
