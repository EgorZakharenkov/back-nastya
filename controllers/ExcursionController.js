import Excursion from "../models/excursion.js";
import mongoose from "mongoose";

// Создание новой экскурсии
export const createExcursion = async (req, res) => {
    try {
        const newExcursion = await Excursion.create(req.body);
        res.status(201).json(newExcursion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Получение всех экскурсий
export const getAllExcursions = async (req, res) => {
    try {
        const excursions = await Excursion.find();
        res.status(200).json(excursions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Получение одной экскурсии по ID
export const getExcursionById = async (req, res) => {
    const { id } = req.params;
    try {
        const excursion = await Excursion.findById(id);
        if (!excursion) return res.status(404).json({ message: "Excursion not found" });
        res.status(200).json(excursion);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Обновление экскурсии
export const updateExcursion = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, image, date } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid ID");

    const updatedExcursion = { title, description, price, image, date, _id: id };

    try {
        await Excursion.findByIdAndUpdate(id, updatedExcursion, { new: true });
        res.json(updatedExcursion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Удаление экскурсии
export const deleteExcursion = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid ID");

    try {
        await Excursion.findByIdAndDelete(id);
        res.json({ message: "Excursion deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
