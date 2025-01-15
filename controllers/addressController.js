const User = require("../models/user");

// Kullanıcı adresi ekleme
exports.addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.addresses.push(address);
    await user.save();

    res.status(200).json({ message: "Address added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding address" });
  }
};

// Kullanıcı adreslerini getirme
exports.getAddresses = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving addresses" });
  }
};
