import loveFill from "../assets/love-fill.svg";
import loveEmpty from "../assets/love-empty.svg";
import { useState } from "react";
export default function BookButtons({
  isFavourite = false,
  onChangeFavourite,
}) {
  return (
    <div className="flex items-center gap-3 text-xs lg:text-sm">
      <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        Add to Cart
      </button>
      {isFavourite ? (
        <button
          className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
          onClick={() => onChangeFavourite(false)}
        >
          <img src={loveFill} />
          Favourite
        </button>
      ) : (
        <button
          className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
          onClick={() => onChangeFavourite(true)}
        >
          <img src={loveEmpty} />
          Favourite
        </button>
      )}
    </div>
  );
}
