const express = require("express");
const mongoose = require("mongoose");
const app = express();
const subsRoute = require("./routes/subscriber.route.js");


// Middleware to parse JSON data
app.use(express.json());

//route
app.use("/api/products", subsRoute)

// Root Route
app.get("/", (req, res) => {
  res.send("Hello From Node API");
});


// ============================================
// Connect to MongoDB
// ============================================
mongoose
  .connect("mongodb+srv://bosesuvash497:fv0IRmSUauq3kboU@hindudal.clnav.mongodb.net/hinduDal?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("Database connection failed:", err.message));

// ============================================
// Start the Server
// ============================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
