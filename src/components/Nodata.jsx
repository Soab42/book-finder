import InfoSvg from "../assets/info.svg";

export default function Nodata() {
  return (
    <div className="mb-6 text-3xl lg:text-4xl h-96 w-[100rem] text-purple-950">
      <div className="flex items-center">
        <img src={InfoSvg} alt="info" className="w-32" />
        <p className="font-bold text-pink-600">No Data Found!</p>
      </div>
      <span className="text-xl pl-9">
        Please search with different keywords.
      </span>
    </div>
  );
}
