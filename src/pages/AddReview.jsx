import { use, useState } from "react";
import Loading from "../components/Loading";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";

const AddReview = () => {
  const [rate, setRate] = useState("Excellent");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const instance = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let ratings = 0;
    if (rate === "Excellent") {
      ratings = 5;
    } else if (rate === "Good") {
      ratings = 4;
    } else if (rate === "Okay") {
      ratings = 3;
    } else if (rate === "Bad") {
      ratings = 2;
    } else {
      ratings = 1;
    }

    const newReview = {
      foodName: e.target.foodName.value,
      foodImage: e.target.foodImage.value,
      restaurantName: e.target.restaurantName.value,
      location: e.target.location.value,
      reviewText: e.target.reviewText.value,
      ratings: ratings,
      postedAt: new Date(),
      providerEmail: user.email,
      providerName: user.displayName,
    };

    instance.post("/newReview", newReview).then((result) => {
      setLoading(false);
      if (result.data.insertedId) {
        toast.success("Review added successfully.");
        navigate("/myReviews");
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-linear-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Share Your Food Experience
          </h1>
          <p className="text-gray-600">Let the world know what you loved!</p>
        </div>

        {/* Form Card */}
        <div className="card bg-white shadow-xl">
          <div className="card-body p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Food Name */}
              <div className="flex flex-col gap-2">
                <label className="label">Food Name</label>
                <input
                  type="text"
                  name="foodName"
                  required
                  placeholder="e.g., Truffle Pasta"
                  className="input w-full"
                />
              </div>

              {/* Food image */}
              <div className="flex flex-col gap-2">
                <label className="label">Food Image</label>
                <input
                  type="text"
                  name="foodImage"
                  required
                  placeholder="Food image url"
                  className="input w-full"
                />
              </div>

              {/* Restaurant Name */}
              <div className="flex flex-col gap-2">
                <label className="label">Restaurant Name</label>
                <input
                  type="text"
                  required
                  name="restaurantName"
                  placeholder="e.g., Bella Italia"
                  className="input w-full"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="label">Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g., Downtown, New York"
                  className="input w-full"
                />
              </div>

              {/* Star Rating */}
              <div className="flex flex-col gap-2">
                <label className="label">Your Rating</label>
                <select
                  required
                  className="select w-full"
                  defaultValue={rate}
                  onChange={(e) => setRate(e.target.value)}
                >
                  <option>Very Bad</option>
                  <option>Bad</option>
                  <option>Okay</option>
                  <option>Good</option>
                  <option>Excellent</option>
                </select>
              </div>

              {/* Review Text */}
              <div className="flex flex-col gap-2">
                <label className="label">Your Review</label>
                <textarea
                  name="reviewText"
                  required
                  placeholder="Tell us what you loved about this dish..."
                  className="textarea w-full"
                />
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-4">
                <button className="btn btn-secondary">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
