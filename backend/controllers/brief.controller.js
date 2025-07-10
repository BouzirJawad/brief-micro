const express = require("express");
const router = express.Router();
const Brief = require("../models/Brief");

const createBrief = async (req, res) => {
  try {
    const { title, description, context, skillCodes } = req.body;

    const brief = await Brief.findOne({ title });

    if (brief) {
      return res.status(404).json({ message: "Brief title already exist" });
    }

    const newBrief = new Brief({
      title,
      description,
      context,
      skillCodes,
    });

    await newBrief.save();
    res.status(201).json({ message: "Brief created successsfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBriefs = async (req, res) => {
  try {
    const briefs = await Brief.find();

    if (briefs.length === 0) {
      return res.status(404).json({ message: "No brief to display" });
    }

    res.status(201).json(briefs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBrief = async (req, res) => {
  try {
    const brief = await Brief.findById(req.params.id);

    if (!brief) {
      return res.josn(404).josn({ message: "Brief not found!" });
    }

    res.status(201).json(brief);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBrief = async (req, res) => {
  try {
    const updatedBrief = await Brief.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedBrief) {
      return res.status(404).json({ message: "Brief not found!" });
    }

    res.status(201).json(updatedBrief)
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
};

const deleteBrief = async (req, res) => {
    try {
        const brief = await Brief.findOne(res.params.id)

        if (!brief) {
            return res.status(404).json({ message: "Brief not found!" })
        }

        await Brief.findByIdAndDelete(req.params.id)
        res.status(201).json({ message: "message deleted successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = { createBrief, getBrief, getBriefs, updateBrief, }
