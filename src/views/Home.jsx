import * as React from "react";
import styles from '../styles/Home.module.css'
import { Button, createTheme }  from '@mui/material';
import { ThemeProvider } from "@emotion/react";
import devOps from '../assets/2.png'
import { green } from '@mui/material/colors';


const Home = () => {

  const buttonStyle = {
    alignSelf: "left",
    height: "50px",
    width: "fit-content",
    color: "#ffffff",
    //marginLeft: "120px",
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    marginLeft: "0px",
    };
  
const theme = createTheme(); // Create an empty theme object

  return (
  <ThemeProvider theme={theme}>
  <div id="Home">
    <div className={styles.containerStyle}>
    <div className={styles.contentStyle}>
      <h3 className={styles.headingOneStyle}>- Welcome to Our agency</h3>
      <h1 className={styles.myheadingTwo}>Smart Ideas for your brand are here</h1>
      <p className={styles.paragraghStyle}>Donec tincidunt lacinia diam, eu volutpat est sollicitudin at. Vestibulum ut mi tristi que, vulputate ante quis, tempus enim. Proin quis euismod purus. Suspen disse efficitur aliquam enim sed consequat vulputate ante quis. </p>
      <Button variant="contained" color="primary" style={buttonStyle}>Discover More</Button>
      {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
    </div>
    <div className={styles.imageStyle}>

      <div className={styles.imgContainerStyle}>
      <img
          src={devOps} // Replace with the URL of your image
          alt="Circle Image"
          className={styles["circle-image"]}
          // style={{borderRadius: "40%"}}
        />
      </div>
    </div>
    </div>
  </div>
  </ThemeProvider>
  );
};

export default Home;
