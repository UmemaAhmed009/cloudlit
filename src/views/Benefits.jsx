import * as React from "react";
import styles from '../styles/Benefits.module.css'
import styleTwo from '../styles/Services.module.css'
import pic1 from '../assets/Quicker feature delivery.svg'
import pic2 from '../assets/Reduced development time.png'
import pic3 from '../assets/Hassle-free deployment.svg'
import pic4 from '../assets/Automated workflows.svg'
import pic5 from '../assets/Better Infrastructure.svg'
import pic6 from '../assets/Reduced Errors.svg'
import pic7 from '../assets/Increased company performance.svg'

const Benefits = () => {
  return (
    <div id="Benefits">
    <main className={styles["benefits-container"]}>
    <div className ={styles.heading}>
        <h1>Benefits of DevOps Consulting Services</h1>
        <p>Our DevOps consulting team helps you bridge business gaps and develop optimum solutions.</p>
    </div>
    <div className={styleTwo.container}>
      <div className = {styles["image-content"]}>
        <div className={styles.image}>
            <img
            src={pic1}
            alt="Quicker feature delivery"
            />
        </div>
        <div className ={styles.content}>
            <h1>Quicker feature delivery</h1>
        </div>
      </div>
        <div className= {styles["image-content"]}>
          <div className={styles.image}>
              <img
              src={pic2}
              alt="Reduced development time"
              />
          </div>
          <div className ={styles.content}>
            <h1>Reduced development time</h1>
        </div>
        </div>
        <div className= {styles["image-content"]}>
          <div className={styles.image}>
              <img
              src={pic3}
              alt="Hassle-free deployment"
              />
          </div>
          <div className ={styles.content}>
            <h1>Hassle-free deployment</h1>
        </div>
        </div>
        <div className= {styles["image-content"]}>
          <div className={styles.image}>
              <img
              src={pic4}
              alt="Automated workflows"
              />
          </div>
          <div className ={styles.content}>
            <h1>Automated workflows</h1>
        </div>
        </div>
        <div className= {styles["image-content"]}>
          <div className={styles.image}>
              <img
              src={pic5}
              alt="Better Infrastructure"
              />
          </div>
          <div className ={styles.content}>
            <h1>Better infrastructure</h1>
        </div>
        </div>
        <div className= {styles["image-content"]}>
          <div className={styles.image}>
              <img
              src={pic6}
              alt="Reduced Errors"
              />
          </div>
          <div className ={styles.content}>
            <h1>Reduced errors</h1>
        </div>
        </div>
        <div className= {styles["image-content"]}>
          <div className={styles.image}>
              <img
              src={pic7}
              alt="Increased company performance"
              />
          </div>
          <div className ={styles.content}>
            <h1>Increased company performance</h1>
        </div>
        </div>
    </div>
    </main>
    </div>
  );
}

export default Benefits;
