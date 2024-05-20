const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    studentEmail: {
      type: String,
    },
    link:{
      type: String,
     },
      subject:{
        type:String
      }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("sem3lab", userSchema);
