import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col gap-3 items-center p-5">
      <img
        src="https://img.freepik.com/premium-vector/woman-stands-near-smartphone-screen-error-404-page-system-error_123447-5750.jpg?w=740"
        alt=""
        className="w-full max-w-xl rounded-2xl"
      />
      <h2 className="text-3xl font-bold text-center">Ops! This page is not founded!</h2>
      <Link to="/" className="btn btn-secondary text-xl">
        Back To Home
      </Link>
    </div>
  );
};

export default Error;
