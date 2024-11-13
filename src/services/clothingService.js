// const express = require('express');
// const router = express.Router();
// const Clothing = require("../models/clothing"); // import the clothing model

// // CREATE - Add a new clothing item
// router.post("/", async (req, res) => {
//   try {
//     const clothing = new Clothing(req.body);
//     const savedClothing = await clothing.save();
//     res.status(201).json(savedClothing);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // READ - Get all clothing items
// router.get("/", async (req, res) => {
//   try {
//     const clothes = await Clothing.find();
//     res.json(clothes);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // READ - Get a clothing item by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const clothing = await Clothing.findById(req.params.id);
//     if (!clothing)
//       return res.status(404).json({ message: "Clothing item not found" });
//     res.json(clothing);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // UPDATE - Update a clothing item by ID
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedClothing = await Clothing.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     if (!updatedClothing)
//       return res.status(404).json({ message: "Clothing item not found" });
//     res.json(updatedClothing);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // DELETE - Delete a clothing item by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedClothing = await Clothing.findByIdAndDelete(req.params.id);
//     if (!deletedClothing)
//       return res.status(404).json({ message: "Clothing item not found" });
//     res.json({ message: "Clothing item deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const Clothing = require('../models/clothingModel'); 

// CREATE - Add a new clothing item
const createClothing = async (req, res) => {
  try {
    const clothing = new Clothing(req.body);
    const savedClothing = await clothing.save();
    res.status(201).json(savedClothing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ - Get all clothing items
const getAllClothing = async (req, res) => {
  try {
    const clothes = await Clothing.find();
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ - Get a clothing item by ID
const getClothingById = async (req, res) => {
  try {
    const clothing = await Clothing.findById(req.params.id);
    if (!clothing) return res.status(404).json({ message: "Clothing item not found" });
    res.json(clothing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE - Update a clothing item by ID
const updateClothingById = async (req, res) => {
  try {
    const updatedClothing = await Clothing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedClothing) return res.status(404).json({ message: "Clothing item not found" });
    res.json(updatedClothing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE - Delete a clothing item by ID
const deleteClothingById = async (req, res) => {
  try {
    const deletedClothing = await Clothing.findByIdAndDelete(req.params.id);
    if (!deletedClothing) return res.status(404).json({ message: "Clothing item not found" });
    res.json({ message: "Clothing item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createClothing,
  getAllClothing,
  getClothingById,
  updateClothingById,
  deleteClothingById,
};
