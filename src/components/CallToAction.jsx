import React from "react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className=" overflow-x-clip bg-black">
      <div className="container py-14 relative">
        <div className="justify-center text-white flex flex-col text-center items-center ">
          <div className="max-w-[545px] mx-auto">
            <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter  mt-6">
              Sign Up For Free Today
            </h1>
            <p className="text-[16px] leading-[30px]  tracking-tight mt-5">
              Celebrate the joy of accomplishment with an app designedd to track
              your progress and motivate your efffort
            </p>
            {/* <Img src='https://res.cloudinary.com/dzgjqwqpd/image/upload/v1731994096/Cone_01_2_5_fk1j9r.png'  alt='star'  className=' hidden md:flex  absolute md:-left-[200px]  top-[137px] ' />
            <Img src='https://res.cloudinary.com/dzgjqwqpd/image/upload/v1731994096/Cone_01_2_5_fk1j9r.png'  alt='star' className='hidden md:flex  absolute md:-right-[231px] lg:-right-[100px]    -top-[19px]' /> */}
            <div className="flex justify-center  gap-4 mt-6">
              <Link to="/register">
                <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-black/70 transition">
                  Get For Free
                </button>
              </Link>
              <Link to="#">
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

         <div className=" border-t border-gray-600 pt-8 sm:flex sm:items-center sm:justify-between lg:mx-16">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                {" "}
                Copyright © 2023 sass. All Rights Reserved.{" "}
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                {" "}
                Cookies{" "}
              </a>
            </li>
          </ul>
        </div>
    </section>
  );
};
