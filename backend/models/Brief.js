const mongoose = require("mongoose");

const briefSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  context: {
    type: String,
    required: true,
  },
  skillCodes: {
    type: [String],
    required: [true, "At least one skill code is required"],
    validate: {
      validator: function (arr) {
        const allMatchPattern = arr.every((code) => /^C\d+$/.test(code));
        const allUnique = new Set(arr).size === arr.length;
        return arr.length > 0 && allMatchPattern && allUnique;
      },
      message:
        "Each skill code must be unique and match the format 'C' followed by a number (e.g., C1, C2, C100)",
    },
  },
});

const briefModel = mongoose.model("Brief", briefSchema);

module.exports = briefModel;
