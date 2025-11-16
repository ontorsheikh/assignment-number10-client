import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyReviews = () => {
  const { user } = use(AuthContext);
  const instanceSecure = useAxiosSecure();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instanceSecure
      .get(`/myReviews?email=${user.email}`)
      .then((result) => {
        setLoading(false);
        setReviews(result.data);
      })
      .catch((error) => {
        setLoading(false);
        if (error.status === 403 || error.status === 401) {
          toast.error("You are a hacker. Get out from my website.");
          return;
        }
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
        instanceSecure
          .delete(`/deleteReview/${id}?email=${user.email}`)
          .then((result) => {
            setLoading(false);
            if (result.data.deletedCount > 0) {
              const updated = reviews.filter((review) => review._id !== id);
              setReviews(updated);
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
                <tr>
                  <td colSpan={6}>
                    <Loading />
                  </td>
                </tr>
              ) : !reviews ? (
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
                          to={`/editReview/${review._id}`}
                          className="btn btn-xs btn-ghost text-secondary"
                        >
                          <Pencil />
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="btn btn-sm btn-ghost text-red-600 hover:bg-red-50"
                        >
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
          {loading ? (
            <Loading />
          ) : !reviews ? (
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
                <span>
                  Posted:{" "}
                  <span className="text-secondary text-sm">
                    {review.postedAt}
                  </span>
                </span>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Link
                    to={`/editReview/${review._id}`}
                    className="btn btn-outline btn-secondary w-full"
                  >
                    <Pencil />
                  </Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-error w-full"
                  >
                    <Trash2 className="text-white" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
