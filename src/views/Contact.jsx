import React from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faTwitter, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={styles.Contact}>
        <div className={styles.pages}>
          <h1><b>Pages</b></h1>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Services</h2>
          <h2>Contact Us</h2>
          <h2>Jobs</h2>
        </div>
        <div className={styles.container}><hr className={styles.horizontalLine} /></div>
      <div className={styles.social}>
        <h1><b>Get social with us</b></h1>
        <div className={styles.iconContainer}>
          <div className={styles.smallBox}>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </div>
          <div className={styles.smallBox}>
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className={styles.icon}
            />
          </div>
          <div className={styles.smallBox}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
