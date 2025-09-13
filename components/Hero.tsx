import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto overflow-x-hidden px-5 mb-8 lg:mb-16">
      <div className="w-full grid lg:grid-cols-5 gap-8 lg:gap-0  ">
        <div className="relative w-full lg:col-span-3 ">
          <img
            src="/wano.jpeg"
            alt="wwan 2.2"
            className="w-full h-full rounded-xl"
          />
          <div className=" p-4 absolute bottom-0 flex flex-col gap-y-2 lg:flex-row lg:items-center justify-between ">
            <div className="text-white w-full lg:w-[55%]">
              <h3 className="textxl md:text-2xl font-semibold">
                WAN 2.2 Image generation
              </h3>
              <p className="text-sm md:text-base">
                Generate complex images with the brand new and powerful WAN 2.2
                model. Exceptional prompt adherence and ultra-realistic
                textures.
              </p>
            </div>
            <button className="bg-white  px-4 py-2 rounded-4xl w-fit self-start lg:self-end">
              {" "}
              Try WAN 2.2
            </button>
          </div>
        </div>

        <div className="w-full lg:col-span-2  lg:ml-10 relative ">
          <img
            src="/perf.png"
            alt="open source"
            className="w-full h-full rounded-xl"
          />
          <div className="text-white p-4 absolute bottom-0  w-full lg:w-4/5">
            <h3 className="ttextxl md:text-2xl font-semibold">FLUXI.1 Krea</h3>
            <p className="text-sm md:text-base">
              We're making the weights to our FLUX.1 Krea model open-source.
              Download and run our model weights, read the technical report, or
              generate with it in Krea Image.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center  lg:grid lg:grid-cols-5 lg:gap-8 mt-4">
        <div className="lg:col-span-3 flex items-center gap-2 justify-end pr-6">
          <div className="size-2 rounded-full bg-black dark:bg-white"></div>
          <div className="flex gap-2 items-center">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="size-2 rounded-full bg-gray-300 dark:bg-gray-900"
                ></div>
              ))}
          </div>
        </div>
        <div className="lg:col-span-2 flex gap-1 justify-end">
          <div className=" bg-[#f6f6f6] p-2 rounded-full dark:bg-[#212121] dark:text-white">
            <MdKeyboardArrowLeft />
          </div>
          <div className=" bg-[#f6f6f6] p-2 rounded-full dark:bg-[#212121] dark:text-white">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
