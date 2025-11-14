import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Header = () => {
  const { user, userLoading, logOut } = useContext(AuthContext);
  if (userLoading) return;
  const menuLinks = (
    <>
      <NavLink to="/" className="btn">
        Home
      </NavLink>
      <NavLink to="/allReviews" className="btn">
        All Reviews
      </NavLink>
      <NavLink to="/about" className="btn">
        About
      </NavLink>
    </>
  );
  const rightMenu = (
    <>
      {user ? (
        <div className="dropdown dropdown-end z-10">
          <div tabIndex={0} role="button" className="m-1 cursor-pointer">
            <img
              src={user.photoURL}
              alt=""
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-60 p-2 shadow-sm"
          >
            <li>
              <span className="block">
                <Link to="addReview" className="btn btn-outline btn-secondary w-full">
                  Add Review
                </Link>
              </span>
            </li>
            <li>
              <span className="block">
                <Link to="myReviews" className="btn btn-outline btn-secondary w-full">
                  My Reviews
                </Link>
              </span>
            </li>
            <li>
              <span className="block">
                <button
                  onClick={logOut}
                  className="btn btn-error text-white w-full"
                >
                  Log Out
                </button>
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Link to="/login" className="btn btn-outline btn-secondary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown z-20">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Food Lovers</a>
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
          {menuLinks}
        </ul>
      </div>
      <div className="navbar-end">{rightMenu}</div>
    </div>
  );
};

export default Header;
