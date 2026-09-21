import {z} from "zod";


const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  category: z.string(),
  price: z.number()
});

const BooksSchema = z.array(BookSchema);

type Book = z.infer<typeof BookSchema>;

const btn = document.getElementById("btn") as HTMLButtonElement;
const heading = document.getElementById("heading") as HTMLHeadingElement;

let data = []

btn.addEventListener("click", async () => {
    // console.log("Button clicked");
    // heading.textContent = "Hello World!";
    const response = await fetch("https://tsapidemo.lwhh.org/api/v1/books")
    const books = await response.json()
    const result = BooksSchema.safeParse(books)
    if (!result.success) {
        console.error("Invalid data:", result.error);
        return;
    }
    console.log(books)
    data = books
    PrintBooks(books[0])
});

function PrintBooks(book: Book) {
  console.log("ID:", book.id);
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Category:", book.category);
  console.log("Price:", book.price);
}