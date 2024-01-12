import Filter from "./Filter";
import Search from "./Search";

export default function Header(props) {
  const { handleSearch, handleSort } = props;
  // console.log(handleSearch, handleSort);
  console.log("header rendering");
  return (
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
  );
}
