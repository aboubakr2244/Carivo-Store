const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
  },
  { timestamps: true },
);
