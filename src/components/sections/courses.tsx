import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    id: "cbap",
    title: "CBAP Certification Training",
    description:
      "Master business analysis with our comprehensive CBAP course, designed to prepare you for the Certified Business Analysis Professional exam.",
    price: "$297",
    image: "/Images/Mobile2_bg_removed.png",
  },
  {
    id: "ccba",
    title: "CCBA Certification Training",
    description:
      "Build foundational skills for the Certification of Competency in Business Analysis with expert-led training and hands-on exercises.",
    price: "$247",
    image: "/Images/eny3.png",
  },
  {
    id: "agile",
    title: "Agile Analysis Course",
    description:
      "Learn Agile methodologies for business analysis, including Scrum and Kanban, to excel in dynamic project environments.",
    price: "$199",
    image: "/Images/eny-hero.png",
  },
];


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
};

const OurCourses = () => {
  return (
    <section
      id="courses"
      className="relative bg-gradient-to-b from-blue-50 to-white py-12 px-6"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/BackgroundImage.png')" }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 lg:max-w-7xl md:max-w-2xl max-w-full mx-auto text-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-white mb-4">
          Our Courses
        </h1>
        <p className="text-sm md:text-lg lg:max-w-xl max-w-lg mx-auto text-white/90 mb-12">
          Explore our expert-led business analysis courses, designed to help you
          achieve certifications like CBAP and CCBA, with AI-powered support to
          guide your journey.
        </p>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={course.image}
                alt={`${course.title} Preview`}
                className="w-full h-48 object-cover"
                width={300}
                height={300}
                priority
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
                <p className="text-lg font-semibold text-blue-600 mb-4">
                  {course.price}
                </p>
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Enroll Now <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Mobile */}
        <div className="md:hidden overflow-hidden">
          <Slider {...sliderSettings}>
            {courses.map((course) => (
              <div key={course.id} className="px-2">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={course.image}
                    alt={`${course.title} Preview`}
                    className="w-full h-48 object-cover"
                    width={300}
                    height={300}
                    priority
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      {course.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {course.description}
                    </p>
                    <p className="text-lg font-semibold text-blue-600 mb-4">
                      {course.price}
                    </p>
                    <Link
                      href={`/courses/${course.id}`}
                      className="inline-flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Enroll Now <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/register"
            className="inline-flex items-center text-blue-800 bg-white px-6 py-3 rounded-md text-lg hover:bg-white/80 transition duration-300"
          >
            Learn More... <ArrowRightIcon className="h-6 w-6 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
