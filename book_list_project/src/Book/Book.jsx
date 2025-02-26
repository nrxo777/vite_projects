import React, { useState } from "react";

const Book = (props) => {
  const [books, setBooks] = useState([
    { id: 1, book_name: "Make Out", writer: "Jiraya" },
    { id: 2, book_name: "Naruto", writer: "Kishimoto" },
    { id: 3, book_name: "One Piece", writer: "Oda" },
    { id: 4, book_name: "Bleach", writer: "Kubo" },
    { id: 5, book_name: "Bleach", writer: "Kubo" },
  ]);

  const delete_book = (index) => {
    let filter_book = books.filter((book, i) => i !== index);
    setBooks(filter_book);
  };

  const books_state = books.map((book, index) => {
    return (
      <div
        key={book.id}
        className="border rounded-xl border-orange-500 text-center m-10 mx-20 p-4 text-xl "
      >
        <h3>
          <span className="text-orange-300">Book Name: {book.book_name}</span>
        </h3>
        <h4>
          <span className="text-orange-300">Writer: {book.writer}</span>
        </h4>
        <button
          className="border bg-amber-700 rounded-xl m-2 p-2 cursor-pointer"
          onClick={() => delete_book(index)}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{books_state}</div>;
};
export default Book;
