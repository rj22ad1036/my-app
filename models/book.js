import { Schema, model, models } from "mongoose";

let Book;

try {
  // Check if the model already exists
  Book = model("Book");
} catch (error) {
  // If it doesn't exist, define the model
  Book = model(
    "Book",
    new Schema(
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        id: {
          type: Number,
          required: true,
          trim: true,
        },
        author: {
          type: String,
          required: true,
          trim: true,
        },

        description: {
          type: String,
          required: true,
          trim: true,
        },

        image: {
          type: String,
          required: true,
          trim: true,
        },
        link: {
          type: String,
          required: true,
          trim: true,
        },
        category: {
          type: String,
          required: true,
          trim: true,
        },

        chapter_count: {
          type: Number,
          default: 0,
        },
      },
      { collection: "books" }
    )
  );
}

export default Book;
