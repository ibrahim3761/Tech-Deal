import React from "react";
import { Link } from "react-router";
const LogIn = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-[10px] lg:py-[35.5px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl font-semibold">Login your account</h1>
              <form className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div className="pt-5">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="text-center py-4">
                  Dont’t Have An Account ?{" "}
                  <Link to="/register">
                    <span className="text-secondary">Register</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
