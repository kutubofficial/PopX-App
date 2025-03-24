import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xs border mx-auto mt-10 p-8">
      <h1 className="text-4xl mt-60 font-bold mb-7">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8 leading-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
        explicabo!
      </p>
      <div className="space-y-4">
        <button
          className="w-full rounded-md font-bold bg-[#570fd4] text-white p-3 hover:bg-[#6b10eb] transition-colors"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button
          className="w-full rounded-md font-bold bg-purple-100 text-gray-700 p-3 hover:bg-purple-200 transition-colors"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
