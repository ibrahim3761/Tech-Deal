import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-base-200 py-2 md:py-10">
      <div className="max-w-sm mx-auto  p-5 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="font-bold text-2xl mb-4">Register</h2>
      <form className="space-y-4">
        {/* Email Feild */}

        <label className="input validator join-item">
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label className="input validator join-item">
          <input
            type="text"
            name="photo"
            placeholder="Your photo URL"
            required
          />
        </label>

        <label className="input validator join-item">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>

        <br />
        {/* Password Feild */}
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <button
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="btn btn-xs"
          >
            {showPassword ? <FaEye /> : <IoMdEyeOff />}
          </button>
        </label>
        <p className="validator-hint hidden">
          Must be more than 6 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        <br />
        <label className="label">
          <input type="checkbox" name="terms" className="checkbox" />
          Accept Terms and Conditions
        </label>
        <br />
        {/* Submit */}
        <input
          className="btn btn-primary w-full"
          type="submit"
          value="Submit"
        />
        {/* Google */}
        <button className="btn btn-primary w-full">
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
          SignUp with Google
        </button>
        {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              User Created Successfully
            </p>
          )} */}
      </form>
      <p className="text-center mt-4 text-lg font-semibold">
        Alreay have an account? Please{" "}
        <Link className="text-blue-600" to="/login">
          Log in
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Register;
