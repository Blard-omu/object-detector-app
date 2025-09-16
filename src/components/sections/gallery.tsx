"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCamera } from "react-icons/bs";
import Link from "next/link";

const samples = [
  {
    id: "snap1",
    title: "TV & Person Detected",
    description:
      "Real-time detection showing bounding boxes for a person and a laptop.",
    image:
      "https://res.cloudinary.com/djkrhjgjd/image/upload/v1758030264/chatbot/Macbook-Air-localhost_28_ba3f5h.png",
  },
  {
    id: "snap2",
    title: "Person & Phone",
    description: "Person and cell phone detected with confidence scores.",
    image:
      "https://res.cloudinary.com/djkrhjgjd/image/upload/v1758033682/chatbot/Screenshot_2025-09-16_at_15.39.13_y506aq.png",
  },
  {
    id: "snap3",
    title: "Multiple Objects",
    description: "COCO-SSD model detecting multiple objects simultaneously.",
    image:
      "https://res.cloudinary.com/djkrhjgjd/image/upload/v1758034364/chatbot/Screenshot_2025-09-16_at_15.48.40_iniur3.png",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  className: "object-gallery-carousel",
};

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = Math.ceil(samples.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 10000);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <section
      id="gallery"
      className="relative py-16 bg-gradient-to-b from-[#5c4efc] to-lilac-50"
    >
      <div className="lg:max-w-7xl md:max-w-2xl max-w-full mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl font-bold text-white mb-4">
          Object Detector App Gallery
        </h2>
        <p className="text-sm lg:max-w-xl max-w-lg mx-auto text-white/80 mb-12">
          Explore real snapshots from the{" "}
          <span className="font-semibold">Object Detector App</span>, showcasing
          real-time AI-powered recognition with bounding boxes and confidence
          scores.
        </p>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {samples.map((sample) => (
            <div
              key={sample.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={sample?.image || "/Images/webcam2.png"}
                alt={sample.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-lilac-900">
                  {sample.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {sample.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Mobile */}
        <div className="md:hidden px-4 overflow-hidden">
          <Slider {...sliderSettings}>
            {samples.map((sample) => (
              <div key={sample.id} className="px-2">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-blue-950">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {sample.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Pagination Dots for Desktop Grid */}
        <div className="hidden md:flex justify-center mt-6 space-x-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-lilac-600 scale-110"
                  : "bg-gray-300 hover:bg-lilac-600"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/camera"
          className="text-white flex items-center  bg-[#5c4efc] text-sm lg:text-xl px-4 py-3 rounded border border-white hover:border-[#5c4efc] hover:bg-transparent hover:text-[#5c4efc] transition duration-300"
        >
          <BsCamera className="lg:h-6 lg:w-6 h-4 w-4 hover:text-lilac-300 mr-2" />
          START CAMERA
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
