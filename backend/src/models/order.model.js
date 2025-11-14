import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderId: {
      type: String,
      required: [true, "Provide orderId"],
      unique: true,
      trim: true,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    productDetails: {
      name: { type: String, required: true },
      image: { type: [String], default: [] },
    },

    paymentId: {
      type: String,
      default: "",
    },

    paymentStatus: {
      type: String,
      default: "",
    },

    deliveryAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },

    subTotalAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    invoiceReceipt: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
