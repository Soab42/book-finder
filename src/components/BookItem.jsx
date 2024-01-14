import BookButtons from "./BookButtons";
import Ratings from "./Ratings";

export default function BookItem({ bookDetails = {}, handleFavorite }) {
  const {
    name,
    author,
    rating,
    price,
    cover_image,
    favourite,
    publication_year,
  } = bookDetails;
  const onChangeFavourite = (isFavourite) => {
    handleFavorite({ ...bookDetails, favourite: isFavourite });
  };
  return (
    <div className="space-y-3">
      {/* <!-- thumbnail --> */}
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4 ">
        <img className="max-w-[144px] h-[220px]" src={cover_image} alt={name} />
      </div>
      {/* <!-- info --> */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">
          {name}({publication_year})
        </h4>
        <p className="text-xs lg:text-sm">
          By : <span>{author}</span>
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          {/* <!-- stars --> */}
          <Ratings rating={rating} />
          {/* <!-- stars ends --> */}
        </div>
        <BookButtons
          isFavourite={favourite}
          onChangeFavourite={onChangeFavourite}
        />
      </div>
    </div>
  );
}
