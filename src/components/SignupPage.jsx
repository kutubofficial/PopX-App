import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [newUser, setNewUser] = useState({
    Fname: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(newUser));
    // navigate("/profile", { state: newUser });
    toast.success(`Welcome ${newUser.Fname} to your Profile`);
    navigate("/profile");
    // console.log(newUser);
  };

  return (
    <div className="max-w-xs border mx-auto mt-5 p-3 text-left">
      <h1 className="text-2xl font-bold mb-4">Create your <br /> PopX account</h1>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="Fname"
            required
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full p-1 border rounded-md mb-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="number"
            name="number"
            maxLength={10}
            placeholder="Enter your phone number"
            className="w-full p-1 border rounded-md mb-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            required
            value={newUser.email}
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
            placeholder="Enter Your Password"
            className="w-full p-1 border rounded-md mb-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company name</label>
          <input
            type="text"
            name="company"
            placeholder="example: microsoft"
            className="w-full p-1 border rounded-md mb-1"
          />
        </div>

        <div className="mb-1">
          <label className="block text-sm font-medium mb-1">
            Are you an Agency?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center">
              <input type="radio" name="agency" value="yes" className="mr-2" />
              Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="agency" value="no" className="mr-2" />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#570fd4] text-white mb-26 p-2 rounded-md font-bold hover:bg-[#6b10eb] transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
