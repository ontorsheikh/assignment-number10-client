import {
  FaBirthdayCake,
  FaCoffee,
  FaIceCream,
  FaPizzaSlice,
} from "react-icons/fa";
import { MdSoupKitchen } from "react-icons/md";
import { TbSalad } from "react-icons/tb";
import { Link } from "react-router";

const PopularCategories = () => {
  const categories = [
    {
      name: "Pizza",
      icon: FaPizzaSlice,
      image:
        "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1763031292~exp=1763034892~hmac=7f98a0cb5a96f0a94efa55a3d72fd182866d12c5af4d5e872423b2bb0beeb7b8&w=2000",
      href: "/category/pizza",
    },
    {
      name: "Desserts",
      icon: FaBirthdayCake,
      image:
        "https://img.freepik.com/free-photo/delicious-dessert-table_23-2151901942.jpg?t=st=1763031266~exp=1763034866~hmac=7dda88b0b41c70f8e9145e161ecf12fb89f9bd8ea2387315401c6e4cc419c4f3&w=740",
      href: "/category/desserts",
    },
    {
      name: "Coffee & Tea",
      icon: FaCoffee,
      image:
        "https://img.freepik.com/free-photo/bottom-view-cup-coffee-anises-roasted-coffee-beans-cocoa-bowls-cinnamon-sticks-biscuits-wood-board-dark_140725-144572.jpg?t=st=1763031238~exp=1763034838~hmac=e6176aa77548247ed72e3c6b717b7f8ff62feb2c293b196d656b46a846e46f4e&w=2000",
      href: "/category/coffee",
    },
    {
      name: "Healthy",
      icon: TbSalad,
      image:
        "https://img.freepik.com/free-photo/top-view-healthy-life-inscription-spiral-notebook-white-pot-collection-fresh-vegetables-vegetarian-dinner-cooking-white-background_140725-143139.jpg?t=st=1763031196~exp=1763034796~hmac=a273aecc97e4196b59e0841653ce820089e7e8d9f96ac8e2ad7184a6afd0695a&w=2000",
      href: "/category/healthy",
    },
    {
      name: "Soups",
      icon: MdSoupKitchen,
      image:
        "https://img.freepik.com/free-photo/soups-ingredients-kitchen-table-flat-lay_23-2148486547.jpg?t=st=1763031111~exp=1763034711~hmac=d09904eb37c18cb56c4d8b86796cf7262e05c8918775a5b797cc260850d963f8&w=2000",
      href: "/category/soups",
    },
    {
      name: "Ice Cream",
      icon: FaIceCream,
      image:
        "https://img.freepik.com/premium-photo/delicious-ice-cream-waffle-bowl-with-chocolate-vanilla-mixed-berries-gourmet-summer-treat_1293074-2157.jpg?w=2000",
      href: "/category/ice-cream",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Explore by Craving
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From cheesy pizzas to creamy desserts — find your next obsession.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.name} href={cat.href}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-48 md:h-56 cursor-pointer">
                  <div className="absolute inset-0">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-xl font-bold">{cat.name}</h3>
                    </div>
                    <p className="text-sm opacity-90">View all →</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
