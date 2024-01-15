import BookItem from "./BookItem";
import BooksData from "../BooksData.json";
import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { handleSort } from "../lib/handleSort";
import Nodata from "./Nodata";

export default function Container() {
  const [searchBook, setSearchBook] = useState("");
  const [sortBook, setSortBook] = useState("");
  const [bookDataDetails, setBookDetails] = useState(BooksData);

  // favorite handle function
  const handleFavorite = (updatedBook) => {
    const updatedBookData = bookDataDetails.map((book) => {
      if (book.id === updatedBook.id) {
        return updatedBook;
      }
      return book;
    });
    setBookDetails(updatedBookData);
  };

  // sorted and filtered data with search functionality
  const finalData = bookDataDetails
    .filter((book) =>
      book?.name.toLowerCase().includes(searchBook?.toLowerCase())
    )
    .sort((a, b) => handleSort(a, b, sortBook));

  // render Book items based on finalData length
  let content;

  if (finalData.length == 0) {
    content = <Nodata />;
  } else {
    content = finalData.map((book) => (
      <BookItem
        bookDetails={book}
        key={book.id}
        handleFavorite={handleFavorite}
      />
    ));
  }
  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            {/* <!-- Search Box --> */}
            <Search handleSearch={setSearchBook} />
          </div>
          {/* <!-- sort - filter --> */}
          <Filter handleSort={setSortBook} />
        </div>
      </header>
      {/* <!-- Book Item --> */}
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {content}
      </div>
    </main>
  );
}
