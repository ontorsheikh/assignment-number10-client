import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ReviewCard = ({ review }) => {
  const {
    id,
    foodImage,
    foodName,
    restaurantName,
    location,
    reviewerName,
    rating,
  } = review;
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={foodImage}
          alt={foodName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <FaStar className="w-4 h-4 fill-current" />
          {rating}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
          {foodName}
        </h3>
        <p className="text-sm text-secondary font-medium">{restaurantName}</p>
        <p className="text-xs text-gray-500 mb-3">{location}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            by <span className="font-medium">{reviewerName}</span>
          </span>
        </div>

        <Link href={`/review/${id}`}>
          <button className="mt-4 w-full bg-secondary/90 hover:bg-secondary text-white font-medium py-2.5 rounded-lg transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
