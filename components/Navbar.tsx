"use client";
import { IoIosArrowDown } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { GiFountainPen } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import { LiaAutoprefixer } from "react-icons/lia";
import { AiFillVideoCamera } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import ToggleBtn from "./ToggleBtn";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const icons = [
    <FaHouse />,
    <MdPhotoSizeSelectActual />,
    <IoIosVideocam />,
    <GiFountainPen />,
    <FaPenFancy />,
    <LiaAutoprefixer />,
    <AiFillVideoCamera />,
  ];
  return (
    <nav className=" w-full mb-8 lg:mb-16 py-3 px-5  flex items-center  justify-between ">
      <div className="w-full lg:w-auto flex items-center justify-between">
        <div className="flex gap-x-3 items-center">
          <Image
            src="/kre.svg"
            height={30}
            width={30}
            alt="logo"
            className="dark:hidden "
          />
          <Image
            src="/whitelogo.svg"
            height={30}
            width={30}
            alt="logo"
            className=" hidden border dark:block "
          />
          <div className="hidden sm:flex items-center gap-x-2 ">
            <div className="size-8 rounded-full bg-gradient-to-b from-[#bc91df] to-[#aecef5]"></div>
            <span className="dark:text-white">benevolentbuid</span>
            <IoIosArrowDown className="dark:text-white" />
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <ToggleBtn />
          <div
            className="p-2 rounded-full bg-[#f6f6f6] dark:bg-[#212121] dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoMdClose className=" cursor-pointer " />
            ) : (
              <RxHamburgerMenu className=" cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {/* navigation */}
      <div className="hidden lg:flex items-center gap-11 p-5 rounded-2xl bg-[#f6f6f6] dark:bg-[#212121] dark:text-white">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="hover:p-4 hover:bg-white hover:rounded-xl hover:m-[-1rem] dark:hover:text-black"
          >
            {icon}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-3 ">
        <div className=" bg-[#f6f6f6] p-2 flex items-center gap-2 rounded-xl dark:bg-[#212121] dark:text-white">
          <MdPhotoSizeSelectActual />
          <span>Gallery</span>
        </div>
        <div className=" bg-[#f6f6f6] p-2 flex items-center gap-2 rounded-xl dark:bg-[#212121] dark:text-white">
          <MdHeadsetMic />
          <span>Support</span>
        </div>
        <div className=" bg-[#f6f6f6] p-2 rounded-full dark:bg-[#212121] dark:text-white">
          <FaBell />
        </div>
        <ToggleBtn />
        <div className="size-8 rounded-full bg-gradient-to-b from-[#bc91df] to-[#aecef5] dark:bg-[#212121] dark:text-white"></div>
      </div>
    </nav>
  );
};

export default Navbar;
