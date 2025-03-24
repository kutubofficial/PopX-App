import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === loginUser.email) {
      if (!storedUser.Fname) {
        storedUser.Fname = "Guest User";
        localStorage.setItem("user", JSON.stringify(storedUser));
      }
      toast.success("Welcome back to profile");
      navigate("/profile");
    } else {
      toast.error("User not found, please signup first");
      navigate("/signup");
    }
    // navigate("/profile", { state: loginUser });
  };
  return (
    <div className="max-w-xs border  mx-auto mt-10 px-5 pb-60">
      <h1 className="text-4xl font-bold mb-7">Singin to your Popx account</h1>
      <p className="text-gray-600 mb-8 leading-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
        explicabo!
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={loginUser.email}
            onChange={handleChange}
            placeholder="marrydoe@example.com"
            className="w-full p-1 border rounded-md mb-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={loginUser.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="w-full p-1 border rounded-md mb-1"
          />
        </div>
        <button
          type="submit"
          className="w-full border bg-gray-300 text-white p-2 rounded-md font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
