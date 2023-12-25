const MenuHeading = require("../models/menuHeading.models.js");

// Get all menu headings
const getAllMenuHeadings = async (req, res) => {
  try {
    const menuHeadings = await MenuHeading.find();
    res.json(menuHeadings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Get a specific menu heading by ID
const getMenuHeadingById = async (req, res) => {
  const { menuHeadingId } = req.params;
  try {
    const menuHeading = await MenuHeading.findById(menuHeadingId);
    if (!menuHeading) {
      return res.status(404).json({ error: 'Menu Heading not found' });
    }
    res.json(menuHeading);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Create a new menu heading
const createMenuHeading = async (req, res) => {
  const { headingId, headName, activeStatus } = req.body;
  try {
    const newMenuHeading = new MenuHeading({ headingId, headName, activeStatus });
    const savedMenuHeading = await newMenuHeading.save();
    res.status(201).json(savedMenuHeading);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Update a menu heading by ID
const updateMenuHeadingById = async (req, res) => {
  const { menuHeadingId } = req.params;
  const { headingId, headName, activeStatus } = req.body;
  try {
    const updatedMenuHeading = await MenuHeading.findByIdAndUpdate(
      menuHeadingId,
      { headingId, headName, activeStatus },
      { new: true }
    );
    if (!updatedMenuHeading) {
      return res.status(404).json({ error: 'Menu Heading not found' });
    }
    res.json(updatedMenuHeading);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Delete a menu heading by ID
const deleteMenuHeadingById = async (req, res) => {
  const { menuHeadingId } = req.params;
  try {
    const deletedMenuHeading = await MenuHeading.findByIdAndDelete(menuHeadingId);
    if (!deletedMenuHeading) {
      return res.status(404).json({ error: 'Menu Heading not found' });
    }
    res.json(deletedMenuHeading);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

module.exports = {
  getAllMenuHeadings,
  getMenuHeadingById,
  createMenuHeading,
  updateMenuHeadingById,
  deleteMenuHeadingById,
};
