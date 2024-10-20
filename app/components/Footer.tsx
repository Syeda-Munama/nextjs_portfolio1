import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
export const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-grey-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Syeda Munama Hassan</h1>
         <div className='flex space-x-4 mt-4'>
            <a href="#" className='hover:text-orange-200'><FaLinkedin size={24}/></a>
            <a href="#" className=' hover:text-orange-200 '><FaGithub size={24}/></a>
            <a href="#" className=' hover:text-orange-200 '><FaInstagram size={24}/></a>
         </div>
    </div>
  )
}
