import { Globe } from "lucide-react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

const foodies = [
  {
    name: "Alex Rivera",
    role: "Street Food Hunter",
    bio: "Chasing the best tacos in Mexico City since 2018.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    social: { ig: "#", tw: "#", web: "#" },
  },
  {
    name: "Mia Wong",
    role: "Dessert Connoisseur",
    bio: "100+ patisseries reviewed. Sweet tooth approved.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    social: { ig: "#", tw: "#", web: "#" },
  },
  {
    name: "Rahul Mehta",
    role: "Spice Route Explorer",
    bio: "From Delhi chaat to Thai curries — I eat, I rate.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    social: { ig: "#", tw: "#", web: "#" },
  },
  {
    name: "Sofia Chen",
    role: "Vegan Food Scout",
    bio: "Plant-based finds in every corner of the world.",
    avatar:
      "https://img.freepik.com/premium-photo/portrait-smiling-young-woman-wearing-eyeglasses-standing-by-railing_1048944-27271232.jpg?w=740",
    social: { ig: "#", tw: "#", web: "#" },
  },
];

export default function CommunitySpotlight() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Meet Our Foodies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate reviewers sharing authentic experiences daily.
          </p>
        </div>

        <div className="">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-4">
            {foodies.map((foodie) => (
              <div
                key={foodie.name}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={foodie.avatar}
                    alt={foodie.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary/60"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{foodie.name}</h3>
                    <p className="text-sm text-secondary font-medium">
                      {foodie.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {foodie.bio}
                </p>

                <div className="flex gap-3">
                  <a
                    href={foodie.social.ig}
                    className="text-pink-600 hover:text-pink-700"
                  >
                    <BsInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href={foodie.social.tw}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <BsTwitterX className="w-5 h-5" />
                  </a>
                  <a
                    href={foodie.social.web}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="text-secondary font-semibold hover:underline">
            Join the Community →
          </button>
        </div>
      </div>
    </section>
  );
}
