import Book from "@/models/book";
import { connectToDB } from "@/utils/db";
export const dynamic = "force-dynamic";
export const POST = async (req, res) => {
  try {
    const {
      name,
      id,
      image,
      description,
      author,
      link,
      category,
      chapter_count,
    } = await req.json();
    console.log("=> Creating book with id: " + id);
    console.log("=> Creating book with name: " + name);
    console.log("=> Creating book with image: " + image);
    console.log("=> Creating book with description: " + description);
    console.log("=> Creating book with author: " + author);
    console.log("=> Creating book with link: " + link);
    console.log("=> Creating book with category: " + category);
    console.log("=> Creating book with chapter_count: " + chapter_count);

    await connectToDB();
    const book = new Book({
      name,
      id,
      author,
      image,
      description,
      link,
      category,
      chapter_count,
    });
    await book.save();
    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    console.error("Error creating book:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
