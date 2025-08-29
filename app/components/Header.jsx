import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile picture"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 "
      >
        Hi I'm Diganta{" "}
        <Image src={assets.hand_icon} alt="Waving hand" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] dark:text-white"
      >
        full stack web developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
      >
        B.Tech student and aspiring full-stack developer passionate about MERN and building impactful web applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* <motion.a 
            initial={{ y: 30, opacity: 0}}
            whileInView={{ y:0, opacity: 1}}
            transition={{ duration: 0.6, delay: 1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black dark:bg-white/20 text-white
            flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-white/30 transition-colors'>
                contact me <Image src={assets.right_arrow_white} alt='Contact arrow' className='w-4'/></motion.a> */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/Diganta-singh-panwar-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 dark:border-gray-400 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          my resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
