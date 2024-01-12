import Star from "../assets/star.svg";

export default function Ratings({ rating = 4 }) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: rating }, (_, index) => (
        <img key={index} src={Star} alt={`Star ${index + 1}`} />
      ))}

      <span className="text-xs lg:text-sm">({rating} Star)</span>
    </div>
  );
}
