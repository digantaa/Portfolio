import React from "react";
import { serviceData } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Services = () => {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center text-5xl dark:text-white"
      >
        My services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300"
      >
        Recent Computer Science graduate specializing in MERN Stack development.
        Proven ability to build responsive web applications using MongoDB,
        Express.js, React, and Node.js
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => {
          // Use mobile-icon1 for dark mode if this is the backend development service
          const serviceIcon =
            title === "Backend Development" && isDark
              ? assets.mobile_icon1
              : icon;

          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 dark:border-gray-600 rounded-lg px-8 py-12 hover:shadow-lg hover:shadow-black dark:hover:shadow-white/20 cursor-pointer hover:bg-lightHover dark:hover:bg-gray-800 hover:-translate-y-1 duration-500"
            >
              <Image
                src={serviceIcon}
                alt={title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-5">
                {description}
              </p>
              <a
                href={link}
                className="flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Read more
                <Image
                  src={isDark ? assets.right_arrow_dark : assets.right_arrow}
                  alt="right arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
