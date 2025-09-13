import React from "react";

const Hero = () => {
  return (
    <section className="w-full grid lg:grid-cols-5 gap-8 lg:gap-0 px-5 max-w-[1440px] mx-auto overflow-x-hidden border">
      <div className="w-full lg:col-span-3 flex flex-col  ">
       <div className="relative ">
         <img
          src="/wano.jpeg"
          alt="wwan 2.2"
          className="w-full h-full rounded-xl"
        />
        <div className=" p-4 absolute bottom-0 flex flex-col gap-y-2 lg:flex-row lg:items-center justify-between ">
          <div className="text-white w-full lg:w-[55%]">
            <h3 className="text-2xl font-semibold">WAN 2.2 Image generation</h3>
            <p>
              Generate complex images with the brand new and powerful Wan 2.2
              model. Exceptional prompt adherence and ultar-realistic textures
            </p>
          </div>
          <button className="bg-white  px-4 py-2 rounded-4xl w-fit self-start lg:self-end">
            {" "}
            Try WAN 2.2
          </button>
        </div>
       </div>
       <div className="hidden mt-4 lg:flex items-center gap-2 self-end pr-6">
        <div className="size-2 rounded-full bg-black dark:bg-white"></div>
        <div className="flex gap-2 items-center">
            {Array(8).fill(0).map((_, index)=>(
            <div key={index} className="size-2 rounded-full bg-gray-300 dark:bg-gray-900"></div>
        ))}
        </div>
       </div>
      </div>
      <div className="w-full lg:col-span-2  lg:ml-10 ">
         <div className="relative">
        <img
          src="/wano.jpeg"
          alt="wwan 2.2"
          className="w-full h-full rounded-xl "
        />
        <div className="text-white p-4 absolute bottom-0  w-full lg:w-4/5">
          <h3 className="text-2xl font-semibold">FLUXI.1 Krea</h3>
          <p>
           We are making the weight to our FLUXI.1 Krea model open-source. Download and run our modelweights, read the technical report or generate with in Krea image
          </p>
        </div>
      </div>
      </div>
     
    </section>
  );
};

export default Hero;




/* <div className="mt-4 flex gap-4">
          <div className=" bg-[#f6f6f6] p-2 rounded-full dark:bg-[#212121] dark:text-white">
            <MdKeyboardArrowLeft />
          </div>
        </div> */