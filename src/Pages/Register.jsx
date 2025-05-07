import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const { googleLogIn, createUser, setUser, updateUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  console.log(location.state);

  const handleRegister = (e) => {
    e.preventDefault();
  
    if (!agree) {
      toast.warn("You must agree to our terms and conditions", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
  
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    //  Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must be at least 6 characters, include uppercase, lowercase, and a number.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
  
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
            toast.success("User registered successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          })
          .catch((error) => {
            setUser(user);
            toast.error(`Profile update failed: ${error.message}`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            navigate(`${location.state ? location.state : "/"}`);
          });
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Logged in with Google successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Google login failed: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  

  return (
    <div className="bg-base-200 py-2 md:py-10">
      <Helmet>
        <title>Register | Tech Deal</title>
      </Helmet>
      <div className="max-w-sm mx-auto  p-5 border border-gray-300 rounded-lg shadow-md bg-white">
        <h2 className="font-bold text-center text-2xl mb-4">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Feild */}

          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
              />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>
          {/* photo feild */}
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 5h-3.2l-1.8-2H8L6.2 5H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 13H3V7h4.2l1.8-2h6l1.8 2H21v11zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-9 9l5-6.5 3.5 4.5 4.5-6 7 9H3z"
              />
            </svg>
            <input
              type="text"
              name="photo"
              placeholder="Your photo URL"
              required
            />
          </label>
          {/* Email feild */}
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
              minLength="6"
    
            />
            <button
              type="button"
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
          {/* checkbox feild */}
          <label className="label">
            <input
              type="checkbox"
              name="terms"
              className="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
           <Link className=" underline hover:text-blue-500" to="/terms">Accept Terms and Conditions</Link>
          </label>
          <br />
          {/* Submit */}
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Register"
          />
          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {/* Google */}
          <button
            onClick={handleGoogleLogIn}
            className="btn btn-primary w-full"
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
            LogIn with Google
          </button>
        </form>
        <p className="text-center mt-4 font-semibold">
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
