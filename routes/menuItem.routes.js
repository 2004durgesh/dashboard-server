const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItem.controllers.js');

// Route to get all menu items
router.get('/menuItems', menuItemController.getAllMenuItems);

// Route to get a specific menu item by ID
router.get('/menuItems/:menuItemId', menuItemController.getMenuItemById);

// Route to create a new menu item
router.post('/menuItems', menuItemController.createMenuItem);

// Route to update a menu item by ID
router.put('/menuItems/:menuItemId', menuItemController.updateMenuItemById);

// Route to delete a menu item by ID
router.delete('/menuItems/:menuItemId', menuItemController.deleteMenuItemById);

module.exports = router;
