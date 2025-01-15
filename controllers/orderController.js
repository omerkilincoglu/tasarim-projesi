const User = require("../models/user");
const Order = require("../models/order");

// Sipariş oluşturma
exports.createOrder = async (req, res) => {
  try {
    const { userId, cartItems, totalPrice, shippingAddress, paymentMethod } =
      req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const order = new Order({
      user: userId,
      products: cartItems.map((item) => ({
        name: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice,
      shippingAddress,
      paymentMethod,
    });

    await order.save();
    res.status(200).json({ message: "Order created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
};

// Kullanıcı siparişlerini getirme
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders" });
  }
};
