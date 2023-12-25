const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuHeadingSchema = new Schema({
  headingId: {
    type: Number,
    validate: {
      validator: function(value) {
        if (this.headName === 'utility' && value !== 1) {
          return false;
        } else if (this.headName === 'pages' && value !== 2) {
          return false;
        } else if (this.headName === 'charts' && value !== 3) {
          return false;
        }
        return true;
      },
      message: 'Invalid headingId for the specified role.',
    },
  },
  headName: {
    type: String,
    enum: ['utility', 'pages', 'charts'],
  },
  activeStatus: {
    type: Boolean,
  },
});

const MenuHeading = mongoose.model('MenuHeading', menuHeadingSchema);

module.exports = MenuHeading;
