import Book from "@/models/book";
import { connectToDB } from "@/utils/db";
export const dynamic = "force-dynamic";
export const POST = async (req, res) => {
  try {
    const { name } = await req.json();
    console.log("=> Fetching user with name: " + name);
    await connectToDB();
    const book = await Book.findOne({ name });
    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
