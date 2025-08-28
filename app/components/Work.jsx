import React from "react";
import { workData } from "@/assets/assets";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Work = () => {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl dark:text-white"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and back-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-6"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 left-1/2
                    -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
              <div
                className="border rounded-full border-black dark:border-white w-9 aspect-square flex
                        items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 dark:group-hover:bg-gray-600 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        href="https://github.com/digantaa?tab=repositories"
        className="w-max flex items-center justify-center gap-2
        text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-400 rounded-full py-3 px-10 mx-auto
        my-20 hover:bg-lightHover dark:hover:bg-gray-800 duration-500"
      >
        Show more{" "}
        <Image
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
