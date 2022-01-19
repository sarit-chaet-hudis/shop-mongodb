const mongoose = require("mongoose");
const { producturi } = require("../../serverpath");
const Product = require("./productschema");

mongoose.connect(producturi, () => console.log("connected"));
run();

async function run() {
  try {
    const toy = new Product({
      name: "Pikachu",
      category: "Toys",
      isActive: true,
      details: {
        description: "A cute toy for children",
        price: 30,
        images: ["image1.jpg", "image2.jpg"],
      },
      phoneNumber: "054-7776666",
    });

    await toy.save();
  } catch (err) {
    console.log(err.message);
  }
}
