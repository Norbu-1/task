import React from 'react';
import image1 from "../assets/Vector.png";
import image2 from "../assets/Vector1.png";
import image3 from "../assets/Vector2.png";
import image4 from "../assets/Vector3.png";

const Section1 = () => {
  return (
    <div className='w-full'>
      <div className='h-auto  lg:w-[77.5rem] lg:my-[6.25rem] mx-6 lg:mx-auto flex flex-wrap  '>
        <div className=' lg:w-[38rem] h-[18.5rem] border-black shadow-sm hover:border  hover:border-indigo-500 rounded mb-6 lg:mr-6'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <img className='w-10 h-5' src={image1} alt="" />
            People
          </div>
          <p className='mx-[2.75rem]'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
          <button className='w-[7.62rem] h-10 mt-[2rem] ml-[2.75rem] border border-black rounded text-blue-500 '>Connect</button>
        </div>
        <div className='lg:w-[38rem] h-[18.5rem] border-black rounded shadow-sm hover:border hover:border-indigo-500 mb-6'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <img className='w-[2.25rem] h-8' src={image3} alt="" />
            Place
          </div>
          <p className='mx-[2.75rem]'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
          <button className='w-[7.62rem] h-10 mt-[2rem] ml-[2.75rem] border border-black rounded text-blue-500 '>Meet up</button>
        </div>
        <div className='lg:w-[38rem] h-[18.5rem] border-black rounded shadow-sm hover:border hover:border-indigo-500 mb-6 lg:mr-6'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <img className='w-10 h-8' src={image2} alt="" />
            Product
          </div>
          <p className='mx-[2.75rem]'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
          <button className='w-[7.62rem] h-10 mt-[2rem] ml-[2.75rem] border border-black rounded text-blue-500 '>Get it</button>
        </div>
        <div className='w-full lg:w-[38rem] h-[18.5rem] border-black rounded hover:border hover:border-indigo-500 shadow-sm mb-6'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <img className='w-8 h-8' src={image4} alt="" />
            People
          </div>
          <p className='mx-[2.75rem]'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
          <button className='w-[7.62rem] h-10 mt-[2rem] ml-[2.75rem] border border-black rounded text-blue-500 '>Attend</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
