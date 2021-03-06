const express = require("express");
const compression = require("compression");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
app.use(compression());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("react/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "react", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
