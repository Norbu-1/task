import React from "react";
import image1 from "../assets/Add.png";
const Section2 = () => {
  return (
    <div className="w-full h-auto bg-[#F7FDFF]  text-center flex">
      <div className=" mx-6 md:mx-[6.25rem] my-[3rem] md:my-[5.25rem]">
        <div className="w-auto h-auto pb-4 bg-white  rounded hover:border hover:border-black shadow-sm flex flex-col">
          <div className="font-bold text-xl mt-10 ml-[2.75rem]  h-10 mb-4 flex items-center gap-1 pt-4">
            <img className="w-8 h-8" src={image1} alt="" />
            Add your own
          </div>
          <p className="mx-[2.75rem]">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button className="w-[7.62rem] h-10 mt-[2rem] ml-[2.75rem] border border-black rounded text-blue-500 ">
            Add new
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
