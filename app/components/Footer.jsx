import React from 'react'
import  Image  from 'next/image';
import { assets } from '@/assets/assets';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDark ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt='logo' className='w-6'/>
                digantapanwar105@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6'>
            <p className='dark:text-gray-300'>Copyright &copy; 2025</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target="_blank" href="https://github.com/digantaa" className='hover:text-gray-600 dark:hover:text-gray-300 transition-colors'>Github</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/diganta-singh-panwar-0011171a1/" className='hover:text-gray-600 dark:hover:text-gray-300 transition-colors'>Linkedin</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer