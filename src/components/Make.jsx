import React from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import bridje from "../assets/img/bridje.svg";

export const Make = () => {
  const makeView = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.4,
        duration: 1,
      },
    }),
    hidden: {
      x: -500,
      opacity: 0,
    },
  };

  const makeView1 = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.9,
        duration: 1,
      },
    }),
    hidden: {
      x: 100,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="text-white mt-10 flex flex-col "
      whileInView="visible"
      initial="hidden"
    >
      <div className="flex flex-col justify-center items-center relative ">
        <motion.p
          variants={makeView}
          custom={1}
          className="text-200px font-extrabold italic z-50 cursor-default  max-[420px]:text-9xl"
        >
          Make
        </motion.p>
        <motion.p
          variants={makeView1}
          custom={1.2}
          className="text-200px font-extrabold italic -mt-36 ml-2 cursor-default  max-[420px]:text-9xl  max-[420px]:mt-0  "
        >
          Bread
        </motion.p>
        <motion.p className="text-200px font-bold italic absolute text-text-trans-gray  top-0 cursor-default  max-[420px]:text-9xl">
          Dough
        </motion.p>
      </div>
      <div className="flex justify-between items-center mt-20  ">
        <motion.div
          className="cursor-default max-[420px]:w-48"
          variants={makeView1}
          custom={1.4}
        >
          <p>Join the 100,000+ people earning daily.</p>
          <p className="text-orange-200">Get the app and get paid.</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-8 max-[420px]:p-2  max-[420px]:flex-col"
          variants={makeView}
          custom={1.4}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="flex items-center gap-1 border p-4 rounded-lg border-gray-800  max-[420px]:p-2  max-[420px]:text-sm"
          >
            App Store 5 <AiFillStar size={12} />{" "}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="flex items-center gap-1 border p-4 rounded-lg border-gray-800 max-[420px]:p-2  max-[420px]:text-sm"
          >
            App Store <AiFillStar size={12} />
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        className="flex justify-center mt-20 rounded-xl bg-white w-full"
      >
        <motion.img
          variants={makeView}
          custom={1}
          src={bridje}
          alt="bridje"
          className="p-20"
        />
      </motion.div>
    </motion.div>
  );
};
