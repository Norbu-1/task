import React, { useState } from "react";
import image1 from "../assets/Google.png";
import image2 from "../assets/Facebook.png";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleProfile = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both email and password fields");
    } else {
      navigate("/Profile");
    }
  };

  return (
    <div className="w-auto flex flex-col mt-8 items-center container">
      <button className="w-full h-10 font-semibold border border-black rounded-md mb-4 flex items-center pl-4">
        <img className="h-4 w-4 mr-[21%]" src={image1} alt="" />
        Continue with Google
      </button>
      <button className="w-full h-10 font-semibold border border-black rounded-md flex items-center pl-4">
        <img className="h-4 w-4 mr-[21%]" src={image2} alt="" />
        Continue with Facebook
      </button>
      <p className="w-full">
        <span className="flex items-center font-bold mt-[1.75rem]">
          <hr className="w-[8.7rem] inline-block mr-1" />
          <span>Or connect with</span>
          <hr className="w-[8.7rem] inline-block ml-1" />
        </span>{" "}
      </p>
      <form className="w-full">
        <input
          type="email"
          name=""
          placeholder="Email"
          id=""
          className="w-full h-10 font-bold border border-black pl-4 rounded-md mb-4 bg-white text-lg text-[#939CA3]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className=" relative">
          <input
            type="text"
            placeholder="Password"
            name=""
            id=""
            className="w-full h-10 font-bold border border-black pl-4 rounded-md mb-6 bg-white text-lg text-[#939CA3]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IoIosEyeOff className=" absolute right-6 top-3" />
        </p>
      </form>
      <div className="flex justify-between font-semibold w-full h-4 mb-6">
        <div className="flex gap-1">
          <input type="checkbox" />
          <p className="text-[0.8rem]">Remember me</p>
        </div>
        <div className="flex gap-1">
          <input type="checkbox" />
          <p className="text-[0.8rem]">Forgot password?</p>
        </div>
      </div>
      <button
        className="w-full h-10 font-bold border border-black rounded-md"
        onClick={handleProfile}
      >
        Continue
      </button>
    </div>
  );
};

export default SignIn;
