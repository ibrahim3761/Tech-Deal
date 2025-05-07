import React, { use, useRef} from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Bounce, toast } from "react-toastify";

const LogIn = () => {
  const { googleLogIn, logIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        toast.success('Log in successful', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        navigate(`${location.state ? location.state : "/"}`);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        console.log(errorCode);
        
        toast.warn('Invalid mail or password', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
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
          autoClose: 1000,
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
  

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
  };
  return (
    <div>
      
      <Helmet>
        <title>Log-In | Tech Deal</title>
      </Helmet>
      <div className="hero bg-base-200 py-[10px] lg:py-[35.5px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-sm shrink-0 shadow-2xl">
            <div className="h-1 bg-blue-500"></div>
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
              <p className="text-gray-500 text-center mb-4">
                Login to your account
              </p>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  ref={emailRef}
                  className="input input-bordered w-full focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full focus:border-blue-500"
                  placeholder="Password"
                  required
                />
                <div className="pt-5">
                  <p onClick={handleForgotPassword} className="link link-hover text-blue-600">
                    Forgot password?
                  </p>
                </div>
                
                <button className="btn btn-primary w-full mt-4 bg-blue-600 hover:bg-blue-700 border-0">
                  Login
                </button>

                <div className="divider">Or</div>

                <button
                  onClick={handleGoogleLogIn}
                  className="btn btn-outline w-full mt-2 flex gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  LogIn with Google
                </button>
                <p className="text-center mt-4 text-lg font-semibold">
                  Don't Have An Account?{" "}
                  <Link to="/register">
                    <span className="text-blue-600">Register</span>
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
