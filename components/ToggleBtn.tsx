// 'use client'
import { useTheme } from '@/providers/ThemeProvider';
import React from 'react'
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const ToggleBtn = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className='cursor-pointer p-2  rounded-full bg-[#f6f6f6] dark:bg-[#212121] dark:text-white ' onClick={toggleTheme}>
        {theme === "light"? <IoMoon  /> : <IoMdSunny /> }
    </div>
  )
}

export default ToggleBtn