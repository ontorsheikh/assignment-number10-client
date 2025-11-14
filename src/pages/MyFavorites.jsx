import { Pencil, Trash2 } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const mockUserReviews = [
  {
    id: 1,
    foodImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    foodName: "Margherita Pizza",
    restaurantName: "Bella Italia",
    location: "Downtown, New York",
    reviewerName: "Sarah Chen",
    rating: 4.9,
  },
  {
    id: 2,
    foodImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    foodName: "Spicy Tuna Roll",
    restaurantName: "Sushi Zen",
    location: "Midtown, Tokyo",
    reviewerName: "Mike Tanaka",
    rating: 4.8,
  },
  {
    id: 3,
    foodImage:
      "https://images.unsplash.com/photo-1541592106381-b31e967553c6?w=400&h=300&fit=crop",
    foodName: "Butter Chicken",
    restaurantName: "Spice Route",
    location: "Delhi, India",
    reviewerName: "Priya Sharma",
    rating: 5.0,
  },
  {
    id: 4,
    foodImage:
      "https://images.unsplash.com/photo-1567620908041-dd9f7a3a4a1a?w=400&h=300&fit=crop",
    foodName: "Croissant",
    restaurantName: "Le Petit Bakery",
    location: "Paris, France",
    reviewerName: "Emma Dubois",
    rating: 4.7,
  },
  {
    id: 5,
    foodImage:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
    foodName: "Pad Thai",
    restaurantName: "Bangkok Street",
    location: "Chinatown, LA",
    reviewerName: "Alex Kim",
    rating: 4.6,
  },
  {
    id: 6,
    foodImage:
      "https://images.unsplash.com/photo-1563379926899-8e8b7b7b2b2f?w=400&h=300&fit=crop",
    foodName: "Tacos al Pastor",
    restaurantName: "Taqueria El Rey",
    location: "Mexico City",
    reviewerName: "Luis Garcia",
    rating: 4.9,
  },
];

const MyFavorites = () => {
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
                <th className="text-left">Food</th>
                <th>Food Name</th>
                <th>Restaurant</th>
                <th className="text-center">Ratings</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUserReviews.map((review, index) => (
                <tr key={review.id} className="hover:bg-gray-50">
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
                    {review.rating}
                  </td>

                  {/* Actions */}
                  <td className="text-center">
                    {/* Delete Button */}
                    <button className="btn btn-sm btn-ghost text-red-600 hover:bg-red-50">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
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
              <span className="flex gap-2">
                Ratings:{" "}
                <span className="text-secondary text-sm flex items-center ">
                  <FaStar />
                  {review.rating}
                </span>
              </span>

              <button className="btn btn-error w-full">
                <Trash2 className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
