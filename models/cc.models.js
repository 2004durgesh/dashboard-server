const mongoose = require("mongoose");
const { Schema } = mongoose; //import schema from mongoose

//schema means structure of database
const CcSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
const cc = mongoose.model("cc", CcSchema);
module.exports = cc;
