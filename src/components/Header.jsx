import React from "react";
import logo from "../assets/img/logo.svg";
import { FaDollarSign, FaGooglePlay } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { VscSymbolNumeric } from "react-icons/vsc";
import { GoSmiley } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const headwerView = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 1,
        duration: 0.5,
      },
    }),
    hidden: {
      x: -100,
      opacity: 0,
    },
  };
  const headwerListView = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      x: -100,
      opacity: 0,
    },
  };
  const linkStyle = [
    "text-white bg-[#262626] p-4 rounded-xl text-xl max-[680px]:text-sm ",
  ];
  const listItem = [
    <FaDollarSign />,
    <BsFillLightningFill />,
    <VscSymbolNumeric />,
    <GoSmiley />,
  ];
  return (
    <motion.div
      className="flex justify-between items-center container mx-auto px-4  max-[420px]:gap-8 relative"
      initial="hidden"
      whileInView="visible"
    >
      <div className="mr-20  max-[680px]:mr-4 ">
        <motion.img
          src={logo}
          alt="logo"
          variants={headwerView}
          custom={1}
          className="max-[420px]:max-w-xs max-w-3xl max-[420px]:w-20 "
        />
      </div>
      <AnimatePresence>
        <motion.div
          className="flex items-center gap-4  max-[680px]:mr-8 "
          whileInView="visible"
          initial="hidden"
        >
          {listItem.map((item, index) => (
            <Link key={index}>
              <motion.p
                variants={headwerListView}
                className={linkStyle}
                custom={index}
                whileHover={{ scale: 1.2 }}
                animate={{
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                  },
                }}
              >
                {item}
              </motion.p>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-8 ">
        <motion.div
          variants={headwerView}
          custom={1}
          className="text-lg max-[680px]:text-xs  max-[420px]:hidden "
        >
          Get the app
        </motion.div>
        <motion.div
          className="bg-pink-300 text-black rounded-xl flex items-center gap-2 max-[420px]:absolute max-[420px]:left-0 max-[420px]:top-12"
          variants={headwerView}
          custom={1.3}
        >
          <Link className="p-2 max-[680px]:p-0">
            <AiFillApple size={42} className="max-[680px]:w-7" />
          </Link>
          |
          <Link className="p-2 max-[680px]:p-0">
            <FaGooglePlay size={28} className="max-[680px]:w-5 " />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
