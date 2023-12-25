const express = require('express');
const router = express.Router();
const menuHeadingController = require('../controllers/menuHeading.controllers.js');

// Route to get all menu headings
router.get('/menuHeadings', menuHeadingController.getAllMenuHeadings);

// Route to get a specific menu heading by ID
router.get('/menuHeadings/:menuHeadingId', menuHeadingController.getMenuHeadingById);

// Route to create a new menu heading
router.post('/menuHeadings', menuHeadingController.createMenuHeading);

// Route to update a menu heading by ID
router.put('/menuHeadings/:menuHeadingId', menuHeadingController.updateMenuHeadingById);

// Route to delete a menu heading by ID
router.delete('/menuHeadings/:menuHeadingId', menuHeadingController.deleteMenuHeadingById);

module.exports = router;
