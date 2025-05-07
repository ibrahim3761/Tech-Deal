import React, { use, useRef, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const ForgotPassword = () => {
  const { forgotPassword } = use(AuthContext);
  const location = useLocation();
  
  const emailRef = useRef();
  const [error, setError] = useState("");

  // Get email from query param
  const params = new URLSearchParams(location.search);
  const emailFromLogin = params.get("email") || "";

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    forgotPassword(email)
      .then(() => {
        console.log("Password reset email sent!");
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 py-[10px] lg:py-[35.5px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-sm shrink-0 shadow-2xl">
          <div className="h-1 bg-blue-500"></div>
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Reset Password</h1>
            <p className="text-gray-500 text-center mb-4">
              Enter your email to reset password
            </p>
            <form onSubmit={handleResetPassword}>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                ref={emailRef}
                defaultValue={emailFromLogin} // Prefill email
                className="input input-bordered w-full focus:border-blue-500"
                placeholder="Email"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="btn btn-primary w-full mt-4 bg-blue-600 hover:bg-blue-700 border-0"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
