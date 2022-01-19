const express = require("express");

const mongoose = require("mongoose");

const { producturi } = require("../../serverpath");

const Product = require("./models/Product");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(producturi, () => console.log("connected mongoose"));

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findById("61e7f1c78c22829f996a4d88");
    // console.log(allProducts);
    res.send(allProducts);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
