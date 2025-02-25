import Book from "./Book/Book";

function App() {
  let books = [
    { book_name: "Make Out", writer: "Jiraya" },
    { book_name: "Shoe Dog", writer: "Phill Knight" },
    { book_name: "Naruto", writer: "Kishimoto" },
    { book_name: "One Piece", writer: "Oda" },
    { book_name: "Bleach", writer: "Kubo" },
  ];

  const books_state = books.map((book) => {
    return <Book book_name={book.book_name} writer={book.writer} />;
  });

  return (
    <>
      <h1 className="text-3xl text-center m-3 p-3 font-bold underline">
        Book List Project
      </h1>
      <div>{books_state}</div>
    </>
  );
}

export default App;
