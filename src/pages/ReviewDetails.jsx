import { useContext, useEffect, useState } from "react";
import { Star, MapPin, Store, Heart } from "lucide-react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ReviewDetails = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const instance = useAxios();
  const instanceSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    instance.get(`/review/${id}`).then((result) => {
      setReview(result.data);
      setLoading(false);
    });
  }, [instance, id]);

  useEffect(() => {
    instanceSecure
      .get(`/myFavorite?loggedEmail=${user.email}&reviewId=${id}`)
      .then((result) => {
        if (result.data) {
          setIsLiked(true);
          return;
        }
      });
  }, [instanceSecure, user, id]);

  const handleLiked = () => {
    if (isLiked) {
      Swal.fire({
        title:
          "You are already added to favorites. Do you delete it from favorites?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setLoading(true);
          instanceSecure
            .delete(
              `/deleteFavoriteDetails?reviewId=${id}&loggedEmail=${user.email}`
            )
            .then((result) => {
              setLoading(false);
              if (result.data.deletedCount > 0) {
                setIsLiked(false);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your review has been deleted from favorites.",
                  icon: "success",
                });
              }
            });
        }
      });
      return;
    }
    const newFavorite = {
      foodImage: review.foodImage,
      foodName: review.foodName,
      restaurantName: review.restaurantName,
      ratings: review.ratings,
      reviewId: id,
      loggedEmail: user.email,
    };
    instanceSecure.post("/newFavorite", newFavorite).then((finalResult) => {
      if (finalResult.data.insertedId) {
        setIsLiked(true);
        toast.success("Review added to favorites successfully.");
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-[50vh] bg-gray-50">
      <title>{`${review.foodName} | Foods Lovers`}</title>
      <div className="max-w-4xl mx-auto py-8">
        <article className="bg-white">
          {/* Hero Image + Rating Badge */}
          <div className="relative">
            <img
              src={review.foodImage}
              alt={review.foodName}
              className="w-full sm:h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-1 text-secondary">
                <Star className="w-6 h-6 fill-secondary" />
                <span className="text-2xl font-bold">{review.ratings}</span>
                <span>/5</span>
              </div>
            </div>
          </div>

          <div className="pt-5">
            {/* Title + Like Button */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {review.foodName}
                </h1>
                <p className="text-xl text-gray-700 mt-1">
                  by {review.providerName}
                </p>
              </div>
              <button
                onClick={handleLiked}
                className="transition-transform hover:scale-110 cursor-pointer"
              >
                <Heart
                  className={`w-9 h-9 ${
                    isLiked ? "fill-secondary text-secondary" : "text-gray-400"
                  }`}
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Restaurant & Location */}
            <div className="flex flex-wrap items-center gap-6 text-gray-700 mb-8">
              <div className="flex items-center gap-3">
                <Store className="w-5 h-5 text-secondary" />
                <span className="font-semibold">{review.restaurantName}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>{review.location}</span>
              </div>
            </div>

            {/* Star Rating Row */}
            <div className="mb-10 flex items-center gap-3">
              <span className="text-4xl font-bold text-gray-800">
                {review.ratings}
              </span>
              <Star className="w-8 h-8 text-secondary fill-secondary" />
            </div>

            {/* Review Text */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Full Review
              </h3>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {review.reviewText}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ReviewDetails;
