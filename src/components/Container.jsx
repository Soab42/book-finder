import BookItem from "./BookItem";
import Header from "./Header";
import BooksData from "../assets/BooksData.json";
import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
export default function Container() {
  const [searchBook, setSearchBook] = useState("");
  const [sortBook, setSortBook] = useState("");
  const handleSearch = (searchtext) => {
    setSearchBook(searchtext);
    console.log(searchBook);
  };
  const handleSort = (sortTerm) => {
    setSortBook(sortTerm);
    console.log(sortBook);
  };
  return (
    <main className="my-10 lg:my-14">
      {/* <!-- header --> */}
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          {/* <!-- info , title , search --> */}
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>
            {/* <!-- Search Box --> */}
            <Search handleSearch={handleSearch} />
            {/* <!-- Search Box Ends --> */}
          </div>
          {/* <!-- sort - filter --> */}
          <Filter handleSort={handleSort} />
        </div>
      </header>
      {/* <!-- header ends --> */}
      {/* <!-- Book Grid --> */}
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <!-- Book Item --> */}
        {BooksData.map((book) => (
          <BookItem bookDetails={book} key={book.id} />
        ))}

        {/* <!-- Book Item Ends --> */}
      </div>
      {/* <!-- Book Grid Ends --> */}
    </main>
  );
}
