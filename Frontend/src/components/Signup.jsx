import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../common/Loader";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginAfterSignup = async (email, password) => {
    try {
      const loginRes = await axios.post("http://localhost:4001/user/login", { email, password });
      if (loginRes.data) {
        // Save user info and access token
        localStorage.setItem("Users", JSON.stringify(loginRes.data.user));
        localStorage.setItem("accessToken", loginRes.data.token); // Save the token
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        // Save user info and check if token is included
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        if (res.data.token) {
          localStorage.setItem("accessToken", res.data.token); // Save the token if included in signup response
          navigate(from, { replace: true });
        } else {
          await loginAfterSignup(data.email, data.password); // Fallback to login if no token in signup response
        }
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px] flex justify-center">
        <div className="modal-box">
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-start mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
