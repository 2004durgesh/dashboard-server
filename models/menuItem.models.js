const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  active: {
    type: Boolean,
  },
  menuHeading: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuHeading',
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
