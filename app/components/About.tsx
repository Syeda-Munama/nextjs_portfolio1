import React from "react";
import Image from "next/image";
import pc from "../assets/pc.png";
import book from "../assets/book.webp";
import card from "../assets/ccard.webp";
import money from "../assets/money.webp";

export const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
        <h1 className="text-4xl font-bold text-white text-center mb-4">About <span className="text-orange-300">Me</span></h1>
      <div className=" px-6 md:p-0 grid  md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]"></Image>
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80">Education</h1>
              <p className="text-lg text-white/70 mt-2">I am an undergraduate computer systems engineer at DUET. Currently focusing on technologies like React, Next.js, Typescript and Python.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="book" className="w-auto h-[130px]"></Image>
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80">Problem Solving</h1>
              <p className="text-lg text-white/70 mt-2">I approach challenges with a logical and systematic approach.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="book" className="w-auto h-[130px]"></Image>
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80">Experience</h1>
              <p className="text-lg text-white/70 mt-2">Internship at Al Rahim Textile Industry and Senior Student at GIAIC.I have a diverse portfolio of projects.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={money} alt="book" className="w-auto h-[130px]"></Image>
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80">Technical Skills</h1>
              <p className="text-lg text-white/70 mt-2">I specialize in building web applications using React, Next.js, TypeScript, and Tailwind CSS. My expertise lies in creating highly responsive, and user-friendly interfaces that provide seamless experiences across devices. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
