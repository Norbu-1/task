
import image1 from "../assets/left.png";
import image2 from "../assets/right.png";

import Login from "./Login";

const HomeScreen = () => {


  return (
    <div className=" bg-[#F7F5F9] flex pt-8 lg:pt-24 flex-wrap justify-between  px-6 lg:px-28  h-auto">
      
        <span className="h-[17.265rem] ">
          <h1 className="md:w-[26rem] lg:w-[36.25rem] lg:h-14 h-7  italic text-black bold text-2xl lg:text-4xl mb-4">
            Explore your <span className="text-blue-900">hobby</span> {} or {}
            <span className="text-[#8750ac]">passion</span>
          </h1>
          <p className=" lg:w-[40.12rem] h-auto font-semibold">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className=" lg:w-[44.125rem] font-semibold mt-4">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </span>
       <p className="w-auto lg:w-25rem"><Login/></p>
        <div className=" md:w-auto lg:w-[44.12rem] mt-20 mb-20 flex lg:justify-between mx-6">
  <img className="w-[50%] lg:w-auto"  src={image1} alt="left" />
  <img className="w-[50%] lg:w-auto"  src={image2} alt="right" />
</div>

      </div>
    
  );
};

export default HomeScreen;
