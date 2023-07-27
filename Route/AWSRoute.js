const express = require("express");
const router = express.Router();
const aws = require("aws-sdk");
var nodemailer = require("nodemailer");

aws.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: "us-west-2", // e.g., 'us-east-1'
});

const s3 = new aws.S3();

router.post("/upload", (req, res, next) => {
  try {
    // Convert req.body to a JSON string
    const requestBodyString = JSON.stringify(req.body);

    // Upload the JSON string to S3
    const uploadParams = {
      Body: requestBodyString,
      Bucket: process.env.bucket,
      Key: Date.now().toString() + "-" + "my-file.json", // Change the file name and extension as needed
    };

    // Use callback syntax
    s3.putObject(uploadParams, (err, data) => {
      if (err) {
        console.error("Error uploading:", err);
        return next(err);
      }

      console.log("Upload successful!", data);
      res.json({ message: "Upload successful!" });
    });
  } catch (error) {
    // Handle errors if any
    console.error("Error:", error);
    next(error);
  }
});

router.post("/test", async (req, res, next) => {
  res.send("AWS test Route");
});

router.post("/email", async (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abdurehmanabbasi1243@gmail.com",
      pass: "qesg xsem wztg bdpk",
    },
  });

  var mailOptions = {
    from: "abdurehmanabbasi1243@gmail.com",
    to: req.body.email,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(info.response);
    }
  });
});

module.exports = router;
