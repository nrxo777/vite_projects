import React from "react";

const Book = (props) => {
  return (
    <>
      <div className="border rounded-xl border-orange-500 text-center m-10 mx-50 p-4 text-xl ">
        <h3>
          <span className="text-orange-300">Book Name:</span> {props.book_name}
        </h3>
        <h4>
          <span className="text-orange-300">Writer:</span> {props.writer}
        </h4>
      </div>
    </>
  );
};

export default Book;
