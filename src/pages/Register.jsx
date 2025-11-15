import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loading from "../components/Loading";

const Register = () => {
  const { user, userLoading, setUserLoading, createUEP, createUG, updateUser } =
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

  if (userLoading) return <Loading />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    const confirm = e.target.confirmPassword.value;

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain lowercase!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain Uppercase!");
      return;
    } else if (password.length < 6) {
      toast.error("Password must 6 letters!");
      return;
    } else if (password !== confirm) {
      toast.error("Password does not matched!");
      return;
    }

    const updatedObj = {
      displayName: name,
      photoURL: photoUrl,
    };

    createUEP(email, password)
      .then(() => {
        return updateUser(updatedObj);
      })
      .then(() => {
        toast.success("Register successful.");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Please log in instead."
          );
          navigate("/login");
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
        toast.success("Register successful.");
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
      <title>Register | Foods Lovers</title>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto bg-gray-400 p-5 rounded-xl flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="input w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="photo">Photo Url</label>
          <input
            id="photo"
            name="photoUrl"
            type="text"
            required
            placeholder="Enter your photo url"
            className="input w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="input w-full"
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={passwordType ? "password" : "text"}
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
        {/* Confirm password */}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={passwordType ? "password" : "text"}
            required
            placeholder="Enter your confirm password"
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
            Register
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
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
