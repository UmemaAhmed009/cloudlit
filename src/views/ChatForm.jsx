import * as React from "react";
import styles from "../styles/ChatForm.module.css";
import icon from "../assets/icon.svg";

import { Container, Typography, TextField, Box, Button } from "@mui/material";

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  // Access the form data using the FormData object
  const message = formData.get("message");
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const company = formData.get("company");

  // Create an object with the form data to be sent as the request body
  const requestBody = {
    message: message,
    name: name,
    email: email,
    phone: phone,
    company: company,
  };

  try {
    // Make the first API call to http://localhost:3000/AWS/upload
    const response1 = await fetch("http://localhost:3000/AWS/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response1.ok) {
      const responseData1 = await response1.json();
      console.log("API Response:", responseData1);
      // Do something with the first API response data if needed

      // Make the second API call to http://localhost:3000/auth/email
      const emailRequestBody = {
        email: email, // Use the email from the form data
      };

      const response2 = await fetch("http://localhost:3000/AWS/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailRequestBody),
      });

      if (response2.ok) {
        const responseData2 = await response2.json();
        console.log("Email API Response:", responseData2);
        // Do something with the second API response data if needed
      } else {
        console.error("Email API Error:", response2.statusText);
        // Handle email API error if needed
      }
    } else {
      console.error("API Error:", response1.statusText);
      // Handle first API error if needed
    }
  } catch (error) {
    console.error("API Error:", error.message);
    // Handle any network or other errors if needed
  }
};

const ChatForm = () => {
  return (
    <div className={styles.ChatForm}>
      <div className={styles.staticStyling}>
        <div>
          <div className={styles.image}>
            <img
              src={icon} // Replace with the URL of your image
              alt="Circle Image"
              className={styles["circle-image"]}
              // style={{borderRadius: "40%"}}
            />
          </div>
          <h1 className={styles.textOne}>
            -Please describe your request in a nutshell
          </h1>
          <h1 className={styles.textOne}>
            -We need your information to reach you back
          </h1>
        </div>
      </div>

      <div className={styles["form-container"]}>
        <h1 className={styles.heading1}>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              // value={phone}
              // onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              // value={company}
              // onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <button className={styles["submit-btn"]} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;
