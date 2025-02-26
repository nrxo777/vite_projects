import React, { useState } from "react";

const Book = (props) => {
  const [books, setBooks] = useState([
    { id: 1, book_name: "Make Out", writer: "Jiraya" },
    { id: 2, book_name: "Naruto", writer: "Kishimoto" },
    { id: 3, book_name: "One Piece", writer: "Oda" },
    { id: 4, book_name: "Bleach", writer: "Kubo" },
    { id: 5, book_name: "Bleach", writer: "Kubo" },
  ]);

  const change_bookname_using_input = (event, index) => {
    const update_book = books.map((book, i) => {
      if (i === index) {
        return { ...book, book_name: event.target.value };
      }
      return book;
    });
    setBooks(update_book);
  };

  const change_writer_using_input = (event, index) => {
    const update_book = books.map((book, i) => {
      if (i === index) {
        return { ...book, writer: event.target.value };
      }
      return book;
    });
    setBooks(update_book);
  };

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
          Book Name: <span className="text-orange-300">{book.book_name}</span>
        </h3>
        <h4>
          Writer: <span className="text-orange-300">{book.writer}</span>
        </h4>
        <input
          type="text"
          className="border bg-white text-orange-900 rounded-xl m-2 p-2"
          placeholder="Enter Book Name"
          onChange={(event) => change_bookname_using_input(event, index)}
          value={book.book_name}
        />
        <input
          type="text"
          className="border bg-white text-orange-900 rounded-xl m-2 p-2"
          placeholder="Enter Book Name"
          onChange={(event) => change_writer_using_input(event, index)}
          value={book.writer}
        />
        <button
          className="border bg-amber-700 rounded-xl m-2 p-2 cursor-pointer"
          onClick={() => delete_book(index)}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  });
  return <div>{books_state}</div>;
};
export default Book;
