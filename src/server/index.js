const express = require("express");
const mongoose = require("mongoose");

const { producturi } = require("../../serverpath");
const Product = require("./models/Product");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(producturi, () => console.log("connected mongoose"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all products
app.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all products by price range
app.get("/price-range", async (req, res) => {
  const { min, max } = req.query;
  try {
    const products = await Product.find({
      "details.price": { $gt: +min, $lt: +max },
    });
    console.log(products);
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get product by id
app.get("/get-product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Update product- toggle active status
app.post("/toggle-active/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    product.isActive = !product.isActive;
    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Update discount for product (via body)
app.post("/update-discount", async (req, res) => {
  const { id, newDiscount } = req.body;
  try {
    const product = await Product.findById(id);
    product.details.discount = newDiscount;
    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
