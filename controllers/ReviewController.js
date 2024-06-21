import Review from "../models/review.js";
import mongoose from "mongoose";

// Создание нового отзыва
export const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Получение всех отзывов
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Получение одного отзыва по ID
export const getReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findById(id);
        if (!review) return res.status(404).json({ message: "Review not found" });
        res.status(200).json(review);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Обновление отзыва
export const updateReview = async (req, res) => {
    const { id } = req.params;
    const { text, name, rating } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid ID");

    const updatedReview = { text, name, rating, _id: id };

    try {
        await Review.findByIdAndUpdate(id, updatedReview, { new: true });
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Удаление отзыва
export const deleteReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid ID");

    try {
        await Review.findByIdAndDelete(id);
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
