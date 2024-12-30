import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import useData from "../services/useData";
import img from "../../public/Img3-RjKnxFab.jpg";

const HeroSection = () => {
  const { darkMode } = useData();

  return (
    <div>
      <div className="relative h-[600px] overflow-hidden">
        <img
          src={img}
          alt="Ancient artifacts collage"
          className="h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Discover History's Greatest Treasures
            </h1>
            <p className="mb-8 text-xl text-gray-200">
              Explore and learn about the world's most fascinating historical
              artifacts
            </p>
            <div className="flex justify-center gap-4">
              <NavLink to={"/all-artifacts"}>
                <button className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
                  Start Exploring
                </button>
              </NavLink>
              <NavLink to={"/add-artifacts"}>
                <button className="rounded-full border-2 border-white px-8 py-3 text-white hover:bg-white/10">
                  Add Artifact
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4 mt-8">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="lg:text-5xl dark:text-gray-300 md:text-4xl text-3xl font-extrabold"
        >
          Discover History's Greatest
          <br /> Treasures
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-gray-500 w-full md:w-2/3 mx-auto text-md px-2 md:text-lg"
        >
          Explore and learn about the world's most fascinating historical
          artifacts
        </p>
        <div className="grid w-fit justify-center gap-2 grid-cols-2 items-center mx-auto">
          <NavLink to={"/"}>
            <button className="btn dark:border-slate-900 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white">
              Start Exploring
            </button>
          </NavLink>
          <NavLink to={"/add-artifacts"}>
            <button className="btn border bg-white hover:bg-gray-100 dark:bg-gray-200 transition-all duration-300 text-gray-500 dark:text-gray-700">
              Add Artifact
            </button>
          </NavLink>
        </div>
        <div className="md:w-2/3 w-full mx-auto md:pt-6">
          <Marquee
            gradientColor={darkMode && "#0f172a"}
            gradient={true}
            speed={20}
            className=""
          >
            <img
              className="w-24 m-2"
              src="https://cdn.freebiesupply.com/logos/large/2x/facebook-1-logo-png-transparent.png"
              alt=""
            />
            <img
              className="w-24 m-2"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Atlassian.svg/2560px-Atlassian.svg.png"
              alt=""
            />
            <img
              className="w-24 m-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png"
              alt=""
            />
            <img
              className="w-24 m-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/VMware_logo.svg/2560px-VMware_logo.svg.png"
              alt=""
            />
            <img
              className="w-20 m-2"
              src="https://www.pngall.com/wp-content/uploads/13/Google-Logo-PNG-Pic.png"
              alt=""
            />
            <img
              className="w-20 m-2"
              src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-blue-png-large-size.png"
              alt=""
            />
            <img
              className="w-16 m-2"
              src="https://www.pngall.com/wp-content/uploads/13/Adobe-Logo.png"
              alt=""
            />
            <img
              className="w-20 m-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Microsoft_Office_13-16_Logo.png/800px-Microsoft_Office_13-16_Logo.png"
              alt=""
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
