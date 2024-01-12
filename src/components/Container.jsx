import BookItem from "./BookItem";
import BooksData from "../assets/BooksData.json";
import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { handleSort } from "../lib/handleSort";
import InfoSvg from "../assets/info.svg";
import { info } from "autoprefixer";
export default function Container() {
  const [searchBook, setSearchBook] = useState("");
  const [sortBook, setSortBook] = useState("");
  // console.log("search", searchBook);
  // console.log("sort", sortBook);
  const BookDataDetails = [...BooksData];

  const finalData = BookDataDetails.filter((book) =>
    book.name.toLowerCase().includes(searchBook.toLowerCase())
  ).sort((a, b) => handleSort(a, b, sortBook));
  let content;
  if (finalData.length == 0) {
    content = (
      <div className="mb-6 text-3xl lg:text-4xl h-96 w-[100rem] text-purple-950">
        <div className="flex items-center">
          <img src={InfoSvg} alt="info" className="w-32" />
          <p className="font-bold text-pink-600">No Data Found!</p>
        </div>
        <span className="text-xl pl-9">
          Please Search with different keywords.
        </span>
      </div>
    );
  } else {
    content = finalData.map((book) => (
      <BookItem bookDetails={book} key={book.id} />
    ));
  }
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
            <Search handleSearch={setSearchBook} />
            {/* <!-- Search Box Ends --> */}
          </div>
          {/* <!-- sort - filter --> */}
          <Filter handleSort={setSortBook} />
        </div>
      </header>
      {/* <!-- header ends --> */}
      {/* <!-- Book Grid --> */}
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <!-- Book Item --> */}
        {content}
        {/* <!-- Book Item Ends --> */}
      </div>
      {/* <!-- Book Grid Ends --> */}
    </main>
  );
}
