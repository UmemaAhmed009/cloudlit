const express = require("express");
require("dotenv").config();
const AWSRoute = require("./Route/AWSRoute");

//start app
const PORT = 3000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.use("/AWS", AWSRoute);

app.listen(PORT, () => {
  console.log(`Ready to Go! on port: ${PORT}`);
});
