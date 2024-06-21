import Bron from "../models/bron.js";

export const create = async (req, res) => {
  try {
    const newBron = await Bron.create(req.body);
    res.status(201).json(newBron);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
