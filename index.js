const express = require("express");
const cors = require("cors");

const app = express();

// Middleware to handle CORS
app.use(cors());

// Routeinformation
app.get("/", (req, res) => {
  const currentDatetime = new Date().toISOString();
  const response = {
    email: "joshuaadedolapo@gmail.com", 
    current_datetime: currentDatetime,
    github_url: "https://github.com/jayflashy/public-info",
  };
  res.status(200).json(response);
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});