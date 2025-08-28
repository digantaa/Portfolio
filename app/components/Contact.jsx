import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const { isDark } = useTheme();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5d83d972-12d3-4520-b21b-3f47f5c8ad9d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDark
          ? ""
          : 'bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
      }`}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400"
      >
        Connect with me{" "}
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl dark:text-white"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md
          bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md
          bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600
          rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 mb-6"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-white/20
          text-white rounded-full mx-auto hover:bg-black dark:hover:bg-white/30 duration-500"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Submit arrow"
            className="w-4"
          />
        </motion.button>

        <p className="mt-4 text-center dark:text-gray-300">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
