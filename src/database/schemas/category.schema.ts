import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    color: { type: String, required: true },
  },
  { versionKey: false },
);

export const CategoryModel = mongoose.model('Category', CategorySchema);
