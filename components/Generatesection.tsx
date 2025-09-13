"use client";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Generatesection = () => {
  const { theme } = useTheme();

  const icons = [
    {
      name: "Image",
      icon: "gallery.svg",
      desc: "Geerate image with custom styles in files and videogram",
      isNew: true,
      bg: "linear-gradient(0deg, rgb(208, 227, 241) 0%, rgb(41, 73, 98) 100%)",
      darkBg: "",
    },
    {
      name: "Video",
      icon: "video.svg",
      desc: "Geerate Videos with custom styles in files and videogram",
      isNew: false,
      bg: "oklch(0.7955 0.1875 75.3501);",
      darkBg: "",
    },

    {
      name: "Realtime",
      icon: "write.svg",
      desc: "Geerate Videos with custom styles in files and videogram",
      isNew: false,
      bg: "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)",
      darkBg: "",
    },

    {
      name: "Enhancer",
      icon: "pen.svg",
      desc: "Generate images and videos up to 22k",
      isNew: true,
      bg: "linear-gradient(0deg, rgb(136, 136, 136) 0%, rgb(0, 0, 0) 100%)",
      darkBg: "",
    },

    {
      name: "Edit",
      icon: "italics.svg",
      desc: "Add objects, change, style or expan your products and generation",
      isNew: true,
      bg: "linear-gradient(0deg, rgb(174, 145, 202) 0%, rgb(89, 42, 133) 60%, rgb(24, 7, 40) 100%)",
      darkBg: "",
    },

    {
      name: "Videolipsync",
      icon: "mega.svg",
      desc: "lip sync any video to any audio",
      isNew: true,
      bg: "linear-gradient(0deg, rgb(187, 202, 145) 0%, rgb(60, 135, 143) 60%, rgb(7, 40, 15) 100%)",
      darkBg: "",
    },
    {
      name: "Motion Transfer",
      icon: "man.svg",
      desc: "tarnsfer motion to images and animate characters",
      isNew: true,
      bg: "black",
      darkBg: "#212121",
    },

    {
      name: "Train",
      icon: "cube.svg",
      desc: "Teach krea to implicate your images, products and characters",
      isNew: false,
      bg: "black",
      darkBg: "#212121",
    },
  ];
  return (
    <div className="w-full px-5 mb-10 ">
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-xl dark:text-white ">Generate</p>
        <div className="flex items-center gap-0.5 text-blue-500 cursor-pointer">
          <IoIosArrowDown />
          <p>show all</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-x-5 dark:text-white"
          >
            {" "}
            <div className="flex items-center gap-2">
              <div
                className="p-3 rounded-lg"
                style={{
                  background:
                    theme === "dark" && icon.darkBg ? icon.darkBg : icon.bg,
                }}
              >
                <Image src={icon.icon} alt={icon.name} height={30} width={30} />
              </div>
              <div className="flex flex-col gap-0.5 ">
                <p className="font-semibod ">
                  {icon.name}{" "}
                  {icon.isNew && (
                    <span className="text-white bg-blue-600 py-1 px-2 rounded-xl text-[12px]">
                      New
                    </span>
                  )}
                </p>
                <p className="text-[12px] opacity-60 leading-4">{icon.desc}</p>
              </div>
            </div>
            <div className="bg-gray-100  text-sm py-1 rounded-xl px-4 dark:bg-[#212121] dark:text-white">
              Open
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generatesection;
