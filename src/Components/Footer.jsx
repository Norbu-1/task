import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <div className="w-full flex flex-col lg:flex-row mx-6 md:mx-auto md:my-16  my-6 justify-evenly text-black h-auto">
        <div className="flex flex-col md:items-center mb-8">
          <h3>Hobbycue</h3>

          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Our Services
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Work with Us
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            FAQ
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Contact Us
          </a>
        </div>

        <div className="flex flex-col md:items-center mb-8">
          <h3>How Do I</h3>

          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Sign Up
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Add a Listing
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Claim Listing
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Post a Query
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Add a Blog Post
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Other Queries
          </a>
        </div>

        <div className="flex flex-col md:items-center mb-8">
          <h3>Quick Links</h3>

          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Listings
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Blog Posts
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Shop/Store
          </a>
          <a
            className="text-black decoration-transparent font-semibold"
            href="#"
          >
            Communities
          </a>
        </div>

        <div className="text-lg ">
          <h3 className="font-semibold">Social Media</h3>

          <div className="flex flex-row  gap-5 justify-start  md:justify-center mt-4 mb-[3.125rem]  ">
            <a className="rounded-full  w-6 h-6 text-[#8064A2]" href="#">
              <FaFacebook />
            </a>
            <a className="rounded-full  w-6 h-6 text-[#8064A2]"  href="#">
              <FaTwitter />
            </a>
            <a className="rounded-full  w-6 h-6 text-[#8064A2]"  href="#">
              <FaInstagram />
            </a>
            <a className="rounded-full  w-6 h-6 text-[#8064A2]"  href="#">
              <FaPinterest />
            </a>
            <a className="rounded-full  w-6 h-6 text-[#8064A2]"  href="">
              <FaYoutube />
            </a>
            <a className="rounded-full  w-6 h-6 text-[#8064A2]"  href="">
              <MdEmail />
            </a>
          </div>

          <div>
            <p className="font-semibold">Invite Friends</p>
            <div className="flex ">
              <input
                className="border h-8 border-black pl-4 text-[#939CA3] rounded-l-lg"
                type="email"
                placeholder="Email"
                name=""
                id=""
              />
              <p className="w-14 h-8 bg-[#8064A2] text-white text-sm font-semibold rounded-r-lg text-center pt-1.5">
                Invite
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F5F9] text-center py-2">
        © Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;
