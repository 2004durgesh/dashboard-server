const MenuItem = require('../models/menuItem.models.js');

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().populate('menuHeading');
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Get a specific menu item by ID
const getMenuItemById = async (req, res) => {
  const { menuItemId } = req.params;
  try {
    const menuItem = await MenuItem.findById(menuItemId).populate('menuHeading');
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu Item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Create a new menu item
const createMenuItem = async (req, res) => {
  const { name, active, menuHeading } = req.body;
  try {
    const newMenuItem = new MenuItem({ name, active, menuHeading });
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Update a menu item by ID
const updateMenuItemById = async (req, res) => {
  const { menuItemId } = req.params;
  const { name, active, menuHeading } = req.body;
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      menuItemId,
      { name, active, menuHeading },
      { new: true }
    ).populate('menuHeading');
    if (!updatedMenuItem) {
      return res.status(404).json({ error: 'Menu Item not found' });
    }
    res.json(updatedMenuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Delete a menu item by ID
const deleteMenuItemById = async (req, res) => {
  const { menuItemId } = req.params;
  try {
    const deletedMenuItem = await MenuItem.findByIdAndDelete(menuItemId);
    if (!deletedMenuItem) {
      return res.status(404).json({ error: 'Menu Item not found' });
    }
    res.json(deletedMenuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

module.exports = {
  getAllMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItemById,
  deleteMenuItemById,
};
