const mongoose = require("mongoose");
const { producturi } = require("../../serverpath");
const Product = require("../server/models/Product");

mongoose.connect(producturi, () => console.log("connected"));
run();

async function run() {
  try {
    const toy = new Product({
      name: "Sabich",
      category: "Food",
      isActive: true,
      details: {
        description: "A delicious pita filled with eggplant and egg",
        price: 18,
        images: ["image1.jpg", "image2.jpg"],
      },
      phoneNumber: "044-1234456",
    });

    await toy.save();
  } catch (err) {
    console.log(err.message);
  }
}
