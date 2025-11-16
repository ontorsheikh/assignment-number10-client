const About = () => {
  return (
    <div className="my-10">
      <title>About | Foods Lovers</title>
      <h1 className="text-3xl font-bold text-center mb-6">
        🥘 About Food Lovers
      </h1>

      <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
        Food Lovers is a paradise for everyone who believes food is not just
        fuel – it’s passion, culture, and emotion. Our goal is to provide a
        smooth and visually rich food exploration experience.
      </p>

      <section className="space-y-6">
        <div className="bg-white rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">❤️ Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Food Lovers was created with a simple dream: to build a platform
            where food enthusiasts can discover delicious foods from all over
            the world. From local favorites to premium dishes, we present
            everything in one place.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Help users explore a wide variety of foods.</li>
            <li>Ensure a smooth and interactive browsing experience.</li>
            <li>Support food providers to showcase their dishes.</li>
            <li>Build a community of food lovers worldwide.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">⭐ What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>🍔 Huge collection of foods with details and images.</li>
            <li>🔍 Smart search & filtering system.</li>
            <li>🧭 Smooth navigation through React Router.</li>
            <li>📱 Fully responsive UI using TailwindCSS.</li>
            <li>🔐 Firebase-powered secure authentication.</li>
            <li>⚡ Fast API handling with Axios.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">👨‍🍳 For Food Providers</h2>
          <p className="text-gray-600 leading-relaxed">
            Restaurant owners and food sellers can showcase their best dishes,
            attract more customers, and grow their online presence.
          </p>
        </div>
      </section>

      <p className="text-center mt-10 text-xl font-semibold text-gray-800">
        ✨ Food Lovers — Where Every Dish Finds a Home.
      </p>
    </div>
  );
};

export default About;
