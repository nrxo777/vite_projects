import React, { useState } from "react";
import CodeBook from "./CodeBook";

const Book = () => {
  let [showbooks, setShowbooks] = useState(false);

  function toggle_books() {
    setShowbooks(!showbooks);
  }
  return (
    <>
      <button
        className="border bg-amber-700 rounded-xl m-4 p-2 items-center cursor-pointer"
        onClick={toggle_books}
      >
        TOGGLE BOOKS
      </button>
      {showbooks ? <CodeBook /> : null}
    </>
  );
};
export default Book;
