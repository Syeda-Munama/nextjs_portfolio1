import React from 'react';
import Image from "next/image";
import phone from "../assets/phone.webp";
import mail from "../assets/mail.webp";

export const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white p-8 space-y-8 lg:space-y-0 lg:space-x-8' id="contact">
      {/* Contact Info */}
      <div className='flex justify-center items-center lg:w-1/2'>
        <ul className='space-y-8'>
          <li className='flex items-center space-x-6'>
            <Image src={phone} alt='phone' className='h-[60px] w-auto' />
            <p className='text-2xl font-semibold hover:text-orange-400 transition duration-300 ease-in-out'>+92 312 1299499084</p>
          </li>
          <li className='flex items-center space-x-6'>
            <Image src={mail} alt='mail' className='h-[60px] w-auto' />
            <p className='text-lg font-semibold hover:text-orange-400 transition duration-300 ease-in-out'>syedamunamahassan@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className='bg-white/10 p-8 rounded-xl max-w-[550px] lg:w-1/2 shadow-lg'>
        <h2 className='text-4xl font-bold text-orange-400 mb-6 text-center'>Let's Connect</h2>
        <p className='text-white/80 mb-8 text-center'>Send me a message, and let's schedule a call!</p>

        <form className='space-y-6' action="https://getform.io/f/bzylkjya" method="POST">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <input type='text' name='name'
              className='bg-black/80 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-400'
              placeholder='First Name'
            />
            <input type='text' name='name'
              className='bg-black/80 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-400'
              placeholder='Last Name'
            />
          </div>
          <input type='email' name='email'
            className='bg-black/80 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full text-white placeholder-gray-400'
            placeholder='Email'
          />
          <input type='phone' name='phone'
            className='bg-black/80 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full text-white placeholder-gray-400'
            placeholder='Phone'
          />
          <textarea
            className='bg-black/80 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full text-white placeholder-gray-400'
            placeholder='Your Message'
            rows={5}
          />
          <button
            className='bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-4 w-full rounded-xl shadow-lg transition duration-300 ease-in-out'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
