require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Bağlantısı
mongoose
  .connect("mongodb+srv://sujananand:sujan@cluster0.cueelai.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Rotaları bağla
app.use("/", require("./routes/auth")); // Kimlik doğrulama rotaları
app.use("/addresses", require("./routes/addresses")); // Adres rotaları
app.use("/orders", require("./routes/orders")); // Sipariş rotaları

// Sunucuyu başlat
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
