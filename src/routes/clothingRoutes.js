// const express = require('express');
// const router = express.Router();

// // Import the controller functions
// const {
//   createClothing,
//   getAllClothing,
//   getClothingById,
//   updateClothingById,
//   deleteClothingById,
// } = require('../controllers/clothingController');

// // Route for creating a clothing item
// router.post('/', createClothing);

// // Route for getting all clothing items
// router.get('/', getAllClothing);

// // Route for getting a specific clothing item by ID
// router.get('/:id', getClothingById);

// // Route for updating a clothing item by ID
// router.put('/:id', updateClothingById);

// // Route for deleting a clothing item by ID
// router.delete('/:id', deleteClothingById);

// module.exports = router;

const express = require("express");
const router = express.Router();
const clothingService = require("../services/clothingService");



// GET all available vans
router.get("/available", async (req, res) => {
  try {
    const clothing = await clothingService.getAvailableClothes();
    res.status(200).json(clothing);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching available clothes", error });
  }
  JavaScript;
});

// GET van by ID
router.get("/:id", async (req, res) => {
  try {
    const clothing_id = req.params.id;
    const clothing = await clothingService.getClothingById(clothing_id);
    if (clothing) {
      res.status(200).json(clothing);
    } else {
      res.status(404).json({ message: "Clothng not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching clothing", error });
  }
});

// POST create a new van
router.post("/", async (req, res) => {
  try {
    const clothingData = req.body;
    const newClothing = await clothingService.createClothing(clothingData);
    res.status(201).json(newClothing);
  } catch (error) {
    res.status(500).json({ message: "Error creating clothingCard", error });
  }
});

// PUT update van availability
router.put("/:id/availability", async (req, res) => {
  try {
    const clothing_id = req.params.id;
    const availability = req.body.availability;
    const updatedClothing = await clothingService.updateClothingAvailability(
      clothing_id,
      availability
    );
    if (updatedClothing) {
      res.status(200).json(updatedClothing);
    } else {
      res.status(404).json({ message: "clothing not found" });
    }
  } catch (error) {
    JavaScript;
    res.status(500).json({ message: "Error updating clothing availability", error });
  }
});

// DELETE van by ID
router.delete("/:id", async (req, res) => {
  try {
    const clothing_id = req.params.id;
    const deletedClothing = await clothingService.deleteClothing(clothing_id);
    if (deletedClothing) {
      res.status(200).json({ message: " Clothing deleted successfully" });
    } else {
      res.status(404).json({ message: " not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting clothing", error });
  }
});

module.exports = router;
