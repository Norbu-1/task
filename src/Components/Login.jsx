import React, { useState } from 'react';
import SignIn from "./SignIn";
import JoinIn from "./joinIn"; // Assuming the file name is "JoinIn.js"
import { useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const [sign, setSign] = useState(false);

  const handleSign = (data) => {
    setSign(data);
  }

  const path = location.pathname === "/SignIn"; // Corrected this line

  return (
    <div className="w-auto lg:w-[25.6rem] md:h-[27rem] ml-2 flex flex-col mt-14 lg:mt-0">
      <div className={`${path ? "justify-center" : ""} flex w-auto font-semibold text-[#80868a] mt-6 md:mt-0 items-center`}>
        <p
          className="w-16 h-8 mr-9 hover:text-[#8064A2] text-xl group relative inline-block cursor-pointer decoration-transparent" onClick={() => handleSign(false)}
        >
          Sign In
          <span className="absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-[#8064A2] w-[4rem] group-hover:scale-x-100"></span>
        </p>
        <p
          className="group relative inline-block cursor-pointer w-16 h-auto mr-9 text-xl decoration-transparent hover:text-[#8064A2]  " onClick={() => handleSign(true)}
        >
          Join In
          <span className="absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-[#8064A2] w-[3.8rem] group-hover:scale-x-100"></span>
        </p>
      </div>
      {!sign ? <SignIn /> : <JoinIn />}
    </div>
  )
}

export default Login;
