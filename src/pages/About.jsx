import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flrx-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            adipisci aliquam, earum, iste itaque, accusantium ad omnis amet
            sapiente aut unde? Dignissimos eos temporibus ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quod sed quia distinctio sequi ut ex sint deserunt vitae ullam
            maiores. Iure nulla nisi laudantium.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit
            fuga magni iste quia necessitatibus, cumque consequuntur eum
            architecto alias, beatae rem dolor corrupti illum!
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
            rem?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>convinience:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ad!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalisation:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            impedit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
