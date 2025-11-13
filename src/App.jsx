import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
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
