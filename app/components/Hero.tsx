// "use client";
// import Image from "next/image";
// import cursor from "../assets/icon2.webp";
// import rock from "../assets/iconnn2.png"
// import {motion} from "framer-motion";
// import profilepicture from "../assets/profilepicture.png"

// import React from 'react'

// export const Hero = () => {
//   return (
//     <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_65%,#DBAF6F_80%)]">
//         <div>
//             <div className="text-center text-8xl font-bold">
//                 <h1 className="text-[#DBAF6F]">Hello, I am</h1>
//                 <h1 className="text-[#98B4CE]">Syeda Munama</h1>
//             </div>
//             <motion.div
//             className="absolute left-[200px] top-[60px]"
//             drag>
//                 <Image src={cursor}
//                 alt="cursor"
//                 width="140"
//                 height="140"
//                 className=""
//                 draggable="false"

//                 />

//             </motion.div>
//             <motion.div
//             className="absolute right-[150px] top-[240px]"
//             drag>
//                 <Image src={rock}
//                 alt="rock"
//                 width="170"
//                 height="170"
//                 className=""
//                 draggable="false"

//                 />

//             </motion.div>
//             <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/70">I am a undergradduate computer system engineer with dedicated expertise in web development.</p>
//             <Image src={profilepicture} alt="profilepicture"
//             className="w-auto h-auto mx-auto"/>
//         </div>
//     </div>
//   )
// }
"use client";
import Image from "next/image";
import cursor from "../assets/icon2.webp";
import rock from "../assets/iconnn2.png";
import { motion } from "framer-motion";
import profilepicture from "../assets/profilepicture.png";
import React from 'react';

export const Hero = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_65%,#DBAF6F_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
       bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-center text-8xl font-bold">
          <h1 className="text-[#DBAF6F]">Hello, I am</h1>
          <h1 className="text-[#98B4CE]">Syeda Munama</h1>
        </div>

        <motion.div className="hidden md:block absolute left-[180px] top-[10px]" drag>
          <Image src={cursor} alt="cursor" width="140" height="140" draggable="false" />
        </motion.div>

        <motion.div className="hidden md:block absolute right-[130px] top-[18px]" drag>
          <Image src={rock} alt="rock" width="170" height="170" draggable="false" />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/70">
          I am an undergraduate computer systems engineer with dedicated expertise in web development.
        </p>

        {/* Profile picture with fixed height and width to ensure it stays within viewport */}
        <div className="w-[300px] h-[300px] mx-auto mt-10 relative">
          <Image 
            src={profilepicture} 
            alt="profile picture" 
            className="absolute bottom-0 w-full h-full object-cover block "
          />
        </div>
        </div>
      </div>
  );
};
