import React from 'react';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';

export const Footer = () => {
  return (
    <>

      <div className='bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center'>

        <div className='flex gap-6 justify-center items-center'>
          <Link to="/">الرئيسية</Link>
          <Link to="/jobs">الوظائف</Link>
          <Link to="/about">من نحن</Link>
          <Link to="/contact">اتصل بنا</Link>
        </div>


        <div>
          <div className='flex flex-col justify-center items-center pt-5'>
            <p className='titleT text-2xl flex justify-center items-center'> <MdOutlineBusinessCenter /> دلني </p>
            <p className='text-sm text-gray-300'>نقدم أفضل الفرص لأفضل الأشخاص.</p>
          </div>

          <div className='flex gap-5 py-2 justify-center items-center'>
            <FaFacebook
              className='cursor-pointer hover:text-[#2D68C4] duration-200 ease'
              size={22}
            />
            <FaTwitter
              className='cursor-pointer hover:text-[#1DA1F2] duration-200 ease'
              size={22}
            />
            <FaYoutube
              className='cursor-pointer hover:text-[#FF0000] duration-200 ease'
              size={22}
            />
            <AiFillInstagram
              className='cursor-pointer hover:text-[#C13584] duration-200 ease'
              size={22}
            />
            <AiFillMail
              className='cursor-pointer hover:text-[#D44638] duration-200 ease'
              size={22}
            />
          </div>
        </div>




        <div className='flex flex-col pt-3 justify-center items-center'>
          <p className='text-sm'>تصميم وتطوير بواسطة <Link target='_blank' className='underline text-blue-400' to="https://sujal-tangde.netlify.app/"> أشرف بوبكري</Link></p>
          <p className='text-sm'> &copy;الحقوق محفوظة.</p>
        </div>

        <div>

        </div>

      </div>

    </>
  )
}
