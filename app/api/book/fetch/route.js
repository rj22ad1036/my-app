import { connectToDB } from "@/utils/db";
import Book from "@/models/book";

export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  try {
    const { id } = await req.json();
    console.log("=> Fetching book with id: " + id);
    await connectToDB();
    const book = await Book.findOne({ id });
    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    console.error("Error fetching book:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
// Compare this snippet from app/api/book/fetch/route.js:
