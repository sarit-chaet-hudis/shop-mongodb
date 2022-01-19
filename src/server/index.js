const express = require("express");

const mongoose = require("mongoose");

const { producturi } = require("../../serverpath");

const Product = require("./models/Product");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(producturi, () => console.log("connected mongoose"));

app.use(express.json());

// Get all products
app.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get product by id
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const allProducts = await Product.findById(id);
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
