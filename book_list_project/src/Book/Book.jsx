import React from "react";

const Book = (props) => {
  let books = [
    { book_name: "Make Out", writer: "Jiraya" },
    { book_name: "Shoe Dog", writer: "Phill Knight" },
    { book_name: "Naruto", writer: "Kishimoto" },
    { book_name: "One Piece", writer: "Oda" },
    { book_name: "Bleach", writer: "Kubo" },
  ];

  const books_state = books.map((book) => {
    return (
      <>
        <div
          key={book.book_name}
          className="border rounded-xl border-orange-500 text-center m-10 mx-50 p-4 text-xl "
        >
          <h3>
            <span className="text-orange-300">Book Name: {book.book_name}</span>
          </h3>
          <h4>
            <span className="text-orange-300">Writer: {book.writer}</span>
          </h4>
        </div>
      </>
    );
  });
  return <div>{books_state}</div>;
};
export default Book;
