import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Loading from "../components/Loading";

const mockUserReviews = [
  {
    id: 1,
    foodImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop",
    foodName: "Margherita Pizza",
    restaurantName: "Bella Italia",
    postedAt: "2025-11-10",
  },
  {
    id: 2,
    foodImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop",
    foodName: "Spicy Tuna Roll",
    restaurantName: "Sushi Zen",
    postedAt: "2025-11-08",
  },
  {
    id: 3,
    foodImage:
      "https://images.unsplash.com/photo-1541592106381-b31e967553c6?w=100&h=100&fit=crop",
    foodName: "Butter Chicken",
    restaurantName: "Spice Route",
    postedAt: "2025-11-05",
  },
];

const MyReviews = () => {
  const { user } = use(AuthContext);
  const instance = useAxiosSecure();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get(`/myReviews?email=${user.email}`).then((result) => {
      setReviews(result.data);
      setLoading(false);
    });
  }, [instance, user]);
  return (
    <div className="bg-linear-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Reviews</h1>
          <p className="text-gray-600">
            Manage all your food experiences in one place
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg hidden sm:flex">
          <table className="table block table-zebra w-full">
            <thead>
              <tr className="bg-orange-100">
                <th>SL NO</th>
                <th className="text-left">Food</th>
                <th>Food Name</th>
                <th>Restaurant</th>
                <th className="text-center">Posted</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <td colSpan={6}>
                  <Loading />
                </td>
              ) : reviews.length === 0 ? (
                <td colSpan={6}>
                  <h2 className="text-center text-2xl font-bold my-10">
                    Reviews not found!
                  </h2>
                </td>
              ) : (
                reviews.map((review, index) => (
                  <tr key={review._id} className="hover:bg-gray-50">
                    {/* Food SL NO */}
                    <td className="font-medium text-gray-800">{index + 1}</td>

                    {/* Food Image */}
                    <td>
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <img
                            src={review.foodImage}
                            alt={review.foodName}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </td>

                    {/* Food Name */}
                    <td className="font-medium text-gray-800">
                      {review.foodName}
                    </td>

                    {/* Restaurant */}
                    <td>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        {review.restaurantName}
                      </div>
                    </td>

                    {/* Posted Date */}
                    <td className="text-center text-sm text-gray-600">
                      {new Date(review.postedAt).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        {/* Edit Button */}
                        <Link
                          to={`/editReview/${review.id}`}
                          className="btn btn-xs btn-ghost text-secondary"
                        >
                          <Pencil />
                        </Link>

                        {/* Delete Button */}
                        <button className="btn btn-sm btn-ghost text-red-600 hover:bg-red-50">
                          <Trash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Small device */}
        <div className="grid gap-8 sm:hidden">
          {mockUserReviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-1">
              <div className="flex gap-2">
                <img
                  src={review.foodImage}
                  alt={review.foodName}
                  className="w-16 h-16 rounded-lg"
                />
                <h2 className="text-xl font-medium">{review.foodName}</h2>
              </div>
              <span>
                Restaurant:{" "}
                <span className="text-secondary text-sm">
                  {review.restaurantName}
                </span>
              </span>
              <span>
                Posted:{" "}
                <span className="text-secondary text-sm">
                  {review.postedAt}
                </span>
              </span>
              <div className="grid grid-cols-2 items-center gap-2">
                <Link
                  to={`/editReview/${review.id}`}
                  className="btn btn-outline btn-secondary w-full"
                >
                  <Pencil />
                </Link>
                <button className="btn btn-error w-full">
                  <Trash2 className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
