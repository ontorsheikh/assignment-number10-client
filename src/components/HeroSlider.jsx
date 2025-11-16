import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Savor the Flavor",
    subtitle: "Discover authentic recipes from around the world",
    buttonText: "Explore Recipes",
    image:
      "https://img.freepik.com/premium-photo/empty-plate-indian-man-with-beard-holding-spoon-fork-wearing-checkered-shirt-sitting-table_466689-45827.jpg?w=2000",
  },
  {
    id: 2,
    title: "Fresh & Delicious",
    subtitle: "Farm-to-table meals made with love",
    buttonText: "View Menu",
    image:
      "https://img.freepik.com/free-photo/top-view-fresh-vegetable-concept_23-2148501521.jpg?t=st=1763254389~exp=1763257989~hmac=e3c82c3655c1e85cf6f1e37e4687304fc971591bed24404afe4899daf6aa91e3&w=740",
  },
  {
    id: 3,
    title: "Taste the Tradition",
    subtitle: "Handcrafted dishes passed down generations",
    buttonText: "Order Now",
    image:
      "https://img.freepik.com/premium-photo/high-angle-view-potted-plant-table_1048944-796566.jpg?w=1480",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[50vh] lg:h-[80vh] overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full rounded-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-10" /> */}

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 lg:px-24">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white drop-shadow-md mb-8 max-w-2xl animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <button className="px-8 py-4 bg-secondary text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
