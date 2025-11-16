import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";

const FeaturedReviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState(null);
  const instance = useAxios();

  useEffect(() => {
    instance.get("/topReviews").then((result) => {
      setReviews(result.data);
      setLoading(false);
    });
  }, [instance]);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Top Rated Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real foodies share their favorite dishes from the best spots in
            town.
          </p>
        </div>

        {loading ? (
          <Loading />
        ) : reviews.length === 0 ? (
          <h2 className="text-center text-2xl font-bold my-10">
            Reviews not found!
          </h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/allReviews">
            <button className="px-8 py-3 bg-white border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-md cursor-pointer">
              Show All Reviews
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
