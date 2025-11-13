import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { user, userLoading, setUserLoading, logInUEP, createUG } =
    useContext(AuthContext);
  const [passwordType, setPasswordType] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user && !userLoading) {
      navigate(from, { replace: true });
    }
  }, [user, userLoading, navigate, from]);

  if (userLoading) return;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!password) {
      toast.error("Please enter validate password!");
      return;
    }

    logInUEP(email, password)
      .then(() => {
        toast.success("Log In successful.");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (
          error.code === "auth/invalid-credential" ||
          error.code === "auth/wrong-password" ||
          error.code === "auth/invalid-email"
        ) {
          toast.error("Invalid email or password. Please try again.");
          return;
        } else {
          toast.error(error.message);
        }
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  const handleCreateGoogle = () => {
    createUG()
      .then(() => {
        toast.success("Log In successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  return (
    <div className="min-h-[50vh] w-full max-w-7xl mx-auto p-5 mt-10 flex items-center justify-center">
      <title>Login | Foods Lovers</title>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto bg-gray-400 p-5 rounded-xl flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="input w-full"
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password">Password</label>
          <input
            type={passwordType ? "password" : "text"}
            name="password"
            required
            placeholder="Enter your password"
            className="input w-full ps-2 pe-8"
          />
          <span className="absolute top-3/5 right-2 bg-white z-10">
            {passwordType ? (
              <FaEye
                onClick={() => setPasswordType(!passwordType)}
                className="text-gray-600 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordType(!passwordType)}
                className="text-gray-600 cursor-pointer"
              />
            )}
          </span>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-secondary px-10 cursor-pointer">
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <span>OR</span>
        </div>
        <div className="">
          <button
            onClick={handleCreateGoogle}
            type="button"
            className="btn w-full bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>
        </div>
        <div className="flex justify-center">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-secondary">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
