// packages import
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
// enable CORS
app.use(cors());
app.use(express.json());
// set the port on which our app wil run
// important to read from environment variable if deploying
const port = process.env.PORT || 5001;

// basic string route to prevent Glitch error
app.get("/test", (req, res) => {
  res.send("Hello World Test!");
});

// the route we're working with
app.post("/", (req, res) => {
  // return the data without modification
  axios({ ...req.body })
    .then((response) => {
      res
        .status(response.status)
        .set({ ...response.headers })
        .send(response.data);
    })
    .catch((error) => {
      res
        .status(error.response.status)
        .set({ ...error.response.headers })
        .send(error.response.data);
    });
});

// console text when app is running
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
