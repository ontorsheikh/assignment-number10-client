import { Trash2 } from "lucide-react";
import { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const MyFavorites = () => {
  const { user } = use(AuthContext);
  const instanceSecure = useAxiosSecure();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instanceSecure.get(`/myFavorites?email=${user.email}`).then((result) => {
      setReviews(result.data);
      setLoading(false);
    });
  }, [instanceSecure, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        instanceSecure.delete(`/deleteFavorite/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            const updated = reviews.filter((review) => review._id !== id);
            setReviews(updated);
            setLoading(false);
            Swal.fire({
              title: "Deleted!",
              text: "Your review has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="bg-linear-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            My Favorites
          </h1>
          <p className="text-gray-600">
            Manage all your favorites food in one place
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg hidden sm:flex">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-orange-100">
                <th>SL NO</th>
                <th className="text-left">Food Image</th>
                <th>Food Name</th>
                <th>Restaurant</th>
                <th className="text-center">Ratings</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6}>
                    <Loading />
                  </td>
                </tr>
              ) : reviews.length === 0 ? (
                <tr>
                  <td colSpan={6}>
                    <h2 className="text-center text-2xl font-bold my-10">
                      Reviews not found!
                    </h2>
                  </td>
                </tr>
              ) : (
                reviews.map((review, index) => (
                  <tr key={review._id} className="hover:bg-gray-50">
                    {/* Food Name */}
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
                    <td className="text-center text-sm text-secondary flex items-center justify-center">
                      <FaStar />
                      {review.ratings}
                    </td>

                    {/* Actions */}
                    <td className="text-center">
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-sm btn-ghost text-red-600 hover:bg-red-50"
                      >
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Small device */}

        <div className="grid gap-8 sm:hidden">
          {loading ? (
            <Loading />
          ) : reviews.length === 0 ? (
            <h2 className="text-center text-2xl font-bold my-10">
              Reviews not found!
            </h2>
          ) : (
            reviews.map((review) => (
              <div key={review._id} className="flex flex-col gap-1">
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
                <span className="flex gap-2">
                  Ratings:{" "}
                  <span className="text-secondary text-sm flex items-center ">
                    <FaStar />
                    {review.ratings}
                  </span>
                </span>

                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-error w-full"
                >
                  <Trash2 className="text-white" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
