// import all books

import Book from "@/models/book";
import { connectToDB } from "@/utils/db.js";

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    // Connect to the database
    await connectToDB();

    // Find the count by ID
    const count = await Book.find({});

    if (!count) {
      return new Response(JSON.stringify({ error: "Count not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(count), { status: 200 });
  } catch (error) {
    console.error("Error fetching count:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
// TO DO: ON HOME PAGE GET BRANDS INFO USING BRANDS ID
