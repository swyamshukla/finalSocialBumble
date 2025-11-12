import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  
  const showToastMessage = () => {
    toast("Welcome Back !", {
      position: "top-right",
      className: "my-15",
      autoClose: 2000,
    });
  };

  let navigate = useNavigate();
  let { register, reset, handleSubmit } = useForm();
  let dispatch = useDispatch();
  
  // data (array) of alredy registerd users. to apply find() method 
  let userData = useSelector((data) => {
    return data.auth.regUser;
  });

  // handling login submit and toastify 
  let [bool, setBool] = useState(false);
  let onsubmit = (data) => {
    let { email, password } = data;
    let user = userData.find(
      (elem) => elem.email === email && elem.password === password
    );

    if (user) {
      dispatch(login(data));

      showToastMessage();
      setTimeout(() => {
        navigate("/");
      }, 100);

      // toast.success("Welcome Back!");
      // navigate('/');
      //these two lines run one after the other immediately — JavaScript doesn’t wait for the toast to finish showing. Toast duplicates or flashes twice

      reset();
    } else {
      toast.error("Invalid credentials", { position: "top-right" });
      setBool(true);
      setTimeout(() => {
        setBool(false);
      }, 2500);
      reset();
    }
  };

  return (
    <div className="flex  justify-center items-center min-h-screen bg-blue-50">
      {bool ? (
        <div>
          <ToastContainer position="top-right" autoClose={2000} />
        </div>
      ) : (
        ""
      )}

      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        {/* Welcome Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Log in to continue to your account.
        </p>

        <form onSubmit={handleSubmit(onsubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              {...register("password", { required: true })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition">
            Log In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
