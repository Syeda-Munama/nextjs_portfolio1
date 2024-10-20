
"use client";
import React from 'react';
import project from "../assets/project.png";
import project1 from "../assets/project1.png";
import {motion} from "framer-motion"
import Image from "next/image";

export const Portfolio = () => {

const projects = [ {
    title: "Inventory Management System",
    desc: "The system allow users to manage their inventory by adding, updating, and deleting items. It has cartpage and admin page.",
    devstack: "React, Node.js, Express, MongoDB",
    link: "#",
    git:"https://github.com/Syeda-Munama/Accessories-Frontend",
    src: project1
},
    {
        title: "Resume Builder Application",
        desc: "A web application that allows users to create professional resumes by filling in personal information, education, experience, and skills.",
        devstack: "HTML, CSS, JavaScript",
        link: "https://resume-builder-indol-chi.vercel.app/",
        git: "https://github.com/Syeda-Munama/resume-builder",
        src: project 
      }
]
  return (
    <>
    
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id="portfolio">
    <h1 className=" max-w-[320px] mx-auto my-12 text-6xl font-bold text-white text-center">Selected <span className="text-orange-400">Work</span></h1>
        <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
         {projects.map((project, index)=>(
            <motion.div
            key={index}
            initial= {{ opacity: 0, y:75}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{ duration: 0.5, delay: 0.25}}
            className={` mt-12 flex flex-col ${index % 2 === 1 ? "flex-col md:flex-row-reverse gap-12" : " md:flex-row gap-12"  }`}>
                <div className='space-y-4 max-y-[550px]'>
                    <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                    <h2 className='text-4xl'>{project.title}</h2>
                    <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                    <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
                    <div className='w-64 h-[1px] bg-gray-400 my-4'>
                    <a href="{project.link}" className='mr-6'>Link</a>
                        <a href='{project.git}'>Git</a>
                        
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <Image src={project.src} alt={project.title} className='h-[350px] w-full object-cover border rounded border-gray-700'/>
                </div>

            </motion.div>
         ))}
        </div>
    </div>
    </>
  )
}
