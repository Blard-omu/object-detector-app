import Navbar from "../navbar";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { BsYoutube, BsTwitter, BsGithub, BsCamera } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: `url("/Images/BackgroundImage.png")` }}
      ></div>

      <div className="lg:max-w-7xl md:max-w-2xl max-w-full w-full mx-auto md:z-10 z-20">
        {/* Top Contact / Social Bar */}
        <div className="hidden md:flex flex-row items-center lg:px-10 py-4">
          <EnvelopeIcon className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          <h1 className="text-white lg:ml-2 lg:text-lg ml-4 mr-6 text-sm">
            support@objectdetector.app
          </h1>
          <div className="flex items-center space-x-6 ml-auto">
            <a
              href="https://github.com/Blard-omu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-lilac-300" />
            </a>
            <a
              href="https://twitter.com/blard-omu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-lilac-300" />
            </a>
            <a
              href="https://youtube.com/blard-omu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-lilac-300" />
            </a>
          </div>
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="lg:max-w-7xl md:max-w-2xl max-w-full mx-auto lg:px-[5%] px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center lg:mt-16 mt-8">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center lg:w-[570px] lg:h-[535px] w-full md:h-[381px] h-auto">
            <h1 className="text-[1.785rem] md:text-[3rem] lg:text-[48px] text-center lg:text-start font-bold text-white leading-tight lg:mb-6 mb-4">
              Real-Time Object Detection App
            </h1>
            <p className="text-white/90 md:text-[1.25rem] lg:text-[1.4rem] text-center lg:text-start lg:mb-12 mb-4">
              <span className="font-semibold">ObjectDetectorApp</span> uses
              TensorFlow.js and COCO-SSD to detect objects like people, books,
              and bottles instantly through your webcam.
              required.
            </p>

            <div className="max-w-2/3 mx-auto md:max-w-full md:mx-0 text-center lg:text-start mt-8 lg:mt-0 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/camera"
                className="bg-white flex items-center  text-[#5c4efc] text-sm lg:text-xl px-4 py-3 rounded border border-white hover:bg-transparent hover:text-white transition duration-300"
              >
                <BsCamera className="lg:h-6 lg:w-6 h-4 w-4 hover:text-lilac-300 mr-2" />
                START CAMERA
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="rounded-2xl shadow-2xl">
            <Image
              src="/Images/webcam2.png"
              alt="AI Object Detection Preview"
              className="w-full rounded-2xl shadow-lg"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

