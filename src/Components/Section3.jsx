import React from "react";
import image1 from "../assets/Audio Track.png";
import image2 from "../assets/quote.png";
import image3 from "../assets/Group 108.png";
const Section3 = () => {
  return (
    <div className="w-full h-auto">
      <div className=" mx-6 md:mx-[6.25rem] my-[3rem] md:my-[5.25rem]">
        <div className="w-auto h-auto bg-[#F7F5F9] rounded hover:border hover:border-black shadow-sm flex flex-col">
          <div className="font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1">
            <img className="w-8 h-8 " src={image2} alt="" />
            Testimonials
          </div>
          <p className="mx-[2.75rem]">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          <div className="flex justify-between items-center px-6 lg:px-10 my-10 flex-wrap">
          <img className=" lg:order-2 mt-4 lg:mt-0 h-16" src={image3} alt="" />
            <img className="lg:order-1 mt-4 lg:mt-0 h-16"  src={image1} alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
