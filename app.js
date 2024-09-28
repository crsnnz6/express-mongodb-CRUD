require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const expressLayout = require;
const mongoose = require("mongoose");
const app = express();
const port = 3000 || process.env.PORT;
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route")

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", () => {
  console.log("Connected to mongodb");
});

//to parse requests to json
app.use(bodyParser.json());
//to allow form url encoded
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Express listening on port ${port}`));
