import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { infoList } from '@/assets/assets';
import {toolsData} from '@/assets/assets';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';



const About = () => {
  const { isDark } = useTheme();
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duratiion: 1}}
    >
      <motion.h4 
      initial={{ y: -20, opacity: 0}}
      whileInView={{ y:0, opacity: 1}}
      transition={{ duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg text-gray-600 dark:text-gray-400'>Introduction</motion.h4>
      <motion.h2
      initial={{ y: -20, opacity: 0}}
      whileInView={{ y:0, opacity: 1}}
      transition={{ duration: 0.5, delay: 0.5}}
      className='text-center text-5xl dark:text-white'>About me</motion.h2>
      
      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8, delay: 0.3}}
      className='flex w-full flex-col items-center my-20'>
          <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6, delay: 0.8}}
          className='w-full max-w-4xl'>
            <p className='mb-10 text-center text-gray-600 dark:text-gray-300'>
              Recent Computer Science graduate specializing in MERN Stack development. 
              Proven ability to build responsive web applications using MongoDB, 
              Express.js, React, and Node.js through academic projects. Eager to apply 
              strong problem-solving skills and passion for clean code in a professional setting.
            </p>
            
            <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
              {infoList.map(({icon, iconDark, title, description}, index)=>(
                <motion.li 
                whileHover={{scale:1.05}}
                className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-lg hover:shadow-black dark:hover:shadow-white/20' key={index} >
                  <Image src={isDark ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-300'>{title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
            initial={{ y: 20, opacity: 0}}
            whileInView={{ y:0, opacity: 1}}
            transition={{ duration: 0.5, delay: 1.3}}
            className='text-center mb-6 text-gray-700 dark:text-gray-300'>Tools I use </motion.h4>

            <motion.ul
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6, delay: 1.5}}
            className='flex items-center justify-center gap-3 sm:gap-5 flex-wrap'>
              {toolsData.map((tool, index) =>{
                // Use git1.png for dark mode, otherwise use the original tool
                const toolIcon = tool === assets.git ? (isDark ? assets.git1 : assets.git) : tool;
                return (
                  <motion.li
                  whileHover={{scale:1.1}}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg 
                  cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-lg hover:shadow-black dark:hover:shadow-white/20' key={index}>
                    <Image src={toolIcon} alt="Tool" className='w-5 sm:w-7'/>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About