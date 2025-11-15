import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { use } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const ReviewCard = ({ review }) => {
  const {
    _id,
    foodImage,
    foodName,
    restaurantName,
    location,
    providerName,
    ratings,
  } = review;
  const { user } = use(AuthContext);
  const instanceSecure = useAxiosSecure();

  const handleLiked = () => {
    instanceSecure
      .get(`/myFavorite?loggedEmail=${user.email}&reviewId=${_id}`)
      .then((result) => {
        if (result.data) {
          toast.error("Review already save to favorites.");
          return;
        }
        const newFavorite = {
          foodImage,
          foodName,
          restaurantName,
          ratings,
          reviewId: _id,
          loggedEmail: user.email,
        };
        instanceSecure.post("/newFavorite", newFavorite).then((finalResult) => {
          if (finalResult.data.insertedId) {
            toast.success("Review added to favorites successfully.");
          }
        });
      });
  };
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={foodImage}
          alt={foodName}
          className="object-cover group-hover:scale-110 transition-transform duration-500 w-full"
        />
        <button
          onClick={handleLiked}
          className="absolute top-3 right-3 bg-white text-secondary p-2 rounded-full text-sm font-bold flex items-center gap-1 cursor-pointer hover:scale-125 duration-200"
        >
          <FaHeart className="w-6 h-6 fill-current" />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
            {foodName}
          </h3>
          <span className="text-secondary flex items-center gap-1">
            <FaStar />
            {ratings}
          </span>
        </div>
        <p className="text-sm text-secondary font-medium">{restaurantName}</p>
        <p className="text-xs text-gray-500 mb-3">{location}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            by <span className="font-medium">{providerName}</span>
          </span>
        </div>

        <Link to={`/review/${_id}`}>
          <button className="mt-4 w-full bg-secondary/90 hover:bg-secondary text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
