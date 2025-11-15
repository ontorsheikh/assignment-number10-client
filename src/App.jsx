import { Outlet, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let timer;
    timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div>
        <ToastContainer />
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <ToastContainer />
        <Header />
        <div className="px-5">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
