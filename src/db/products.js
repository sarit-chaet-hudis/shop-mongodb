const mongoose = require("mongoose");
const { producturi } = require("../../serverpath");
const Product = require("./productschema");

mongoose.connect(producturi, () => console.log("connected"));
run();

async function run() {
  try {
    const toy = new Product({
      name: "6 Foot Sub",
      category: "Food",
      isActive: true,
      details: {
        description: "A delicious sandwich with yumminess",
        price: 200,
        images: ["image1.jpg", "image2.jpg"],
      },
      phoneNumber: "04-7778888",
    });

    await toy.save();
  } catch (err) {
    console.log(err.message);
  }
}
