import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";

const AllReviews = () => {
  const instance = useAxios();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get("/allReviews").then((result) => {
      setReviews(result.data);
      setLoading(false);
    });
  }, [instance]);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            All Food Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore authentic experiences from foodies around the world.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center justify-center my-10 gap-2">
          <label className="input border-secondary outline-secondary">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <button className="btn btn-secondary">Search</button>
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <Loading />
        ) : reviews.length === 0 ? (
          <h2 className="text-center text-2xl font-bold my-10">
            Reviews not found!
          </h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
