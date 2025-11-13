import ReviewCard from "../components/ReviewCard";

const mockReviews = [
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
const AllReviews = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
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

        {/* Reviews Grid */}
        {mockReviews.length === 0 ? (
          <span>No data</span>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
