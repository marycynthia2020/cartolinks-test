import Image from "next/image";
import { FaRegCreditCard } from "react-icons/fa";

const Footer = () => {
  const icon = [
    {
      name: "Legal",
      icon: <FaRegCreditCard />,
    },
    {
      name: "Pricing",
      icon: <FaRegCreditCard />,
    },
  ];
  return (
    <div className="w-full  pb-0 ">
      <div className="flex items-center justify-between px-5 mb-2">
        <p className=" font-semibold text-xl dark:text-white  ">
          Gallery
        </p>
        <div className="flex items-center gap-4 text-sm">
          {icon.map((icon, index) => (
            <div key={index} className="flex items-center gap-1 rounded-xl bg-gray-100 py-1 px-2 dark:bg-[#212121] dark:text-white">
               {icon.icon}
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#212121] px-5 py-5 text-white flex flex-col gap-y-3 md:flex-row items-center justify-between dark:bg-[#2f2f2f] ">
        <div className="flex gap-3 items-center">
          <div className="bg-black w-fit  p-1 rounded-md ">
            <Image
              src="/whitelogo.svg"
              height={30}
              width={30}
              alt="logo"
              className=""
            />
          </div>
          <span className="text-2xl md:text-3xl font-semibold">Krea AI</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-xl  md:text-2xl">curated by </p>
          <div className="flex items-center">
            <Image src="/whitem.png" alt="m logo" height={30} width={50} />
            <span className="font-semibold text-2xl md:text-4xl">Mobbin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
