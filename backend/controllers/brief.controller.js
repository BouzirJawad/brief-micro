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
  const { briefId } = req.params;
  try {
    const brief = await Brief.findById(briefId);

    if (!brief) {
      return res.josn(404).josn({ message: "Brief not found!" });
    }

    res.status(201).json(brief);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBrief = async (req, res) => {
  const { briefId } = req.params;
  try {
    const updatedBrief = await Brief.findByIdAndUpdate(
      briefId,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedBrief) {
      return res.status(404).json({ message: "Brief not found!" });
    }

    res.status(201).json(updatedBrief);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBrief = async (req, res) => {
  const { briefId } = req.params;
  try {
    const brief = await Brief.findById(briefId);

    if (!brief) {
      return res.status(404).json({ error: "Skill not found" });
    }

    await Brief.findByIdAndDelete(briefId);
    res.status(201).json({ message: "Brief deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBrief, getBrief, getBriefs, updateBrief, deleteBrief };
