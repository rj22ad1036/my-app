// import Book from "@/models/book";
// import { connectToDB } from "@/utils/db";
// export const dynamic = "force-dynamic";
// export const POST = async (req, res) => {
//   try {
//     const {
//       name,
//       id,
//       image,
//       description,
//       author,
//       link,
//       category,
//       chapter_count,
//     } = await req.json();
//     console.log("=> Creating book with id: " + id);
//     await connectToDB();
//     const book = new Book({
//       name,
//       id,
//       image,
//       description,
//       author,
//       link,
//       category,
//       chapter_count,
//     });
//     await book.save();
//     return new Response(JSON.stringify(book), { status: 200 });
//   } catch (error) {
//     console.error("Error creating book:", error);
//     return new Response(JSON.stringify({ error: "Internal server error" }), {
//       status: 500,
//     });
//   }
// };

// delete function
import Book from "@/models/book";
import { connectToDB } from "@/utils/db";
export const dynamic = "force-dynamic";
export const POST = async (req, res) => {
  try {
    const { id } = await req.json();
    console.log("=> Deleting book with id: " + id);
    await connectToDB();
    const book = await Book.findOneAndDelete({ id });
    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    console.error("Error deleting book:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
