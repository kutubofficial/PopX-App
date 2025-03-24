import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  // const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user")) || {
    Fname: "Guest User",
    email: "guest@gmail.com",
  };
  return (
    <div className="max-w-xs border mx-auto mt-5 text-left">
      <h1 className="text-3xl px-2 font-bold mb-4">Account Settings</h1>
      <hr className="" />
      <div className="bg-gray-200 px-2 py-5 ">
        <div className="flex items-center gap-4">
          <div className="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{user?.Fname}</h2>
            <p className="text-gray-600 text-sm">{user?.email}</p>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-gray-600 pb-2 leading-relaxed text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ullam
          reiciendis. In saepe cumque libero iure iste, totam corrupti, nam eius
          nobis
        </p>
        <p className="border-t-2 border-dotted border-gray-400 pb-90 "></p>
      </div>
    </div>
  );
};

export default ProfilePage;
