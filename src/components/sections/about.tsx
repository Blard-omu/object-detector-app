import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
        <h1 className="lg:text-4xl text-2xl font-bold text-blue-950 lg:mb-8 mb-4">
          ABOUT THE APP
        </h1>
        <p className="text-sm md:text-lg text-center text-blue-900 lg:max-w-2xl max-w-lg">
          The <span className="font-semibold">Object Detector App</span> is a
          lightweight, browser-based tool that uses{" "}
          <span className="font-semibold">TensorFlow.js</span> and the{" "}
          <span className="font-semibold">COCO-SSD model</span> to identify
          objects in real time through your webcam. Designed with a clean
          white-and-lilac theme, it helps users explore AI-powered object
          recognition with an intuitive interface and smooth user experience.
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center lg:mt-12 mt-8 relative"
          style={{ minHeight: "8rem" }}
        >
          <Image
            src="/Images/mentor11.png"
            alt="Object Detection in Action"
            className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto rounded-xl shadow-lg"
            width={300}
            height={300}
          />

          <div className="flex flex-col items-center justify-center lg:mt-0 lg:ml-40 md:ml-20 mt-12 w-full max-w-xl">
            <div className="space-y-6 w-full px-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-lilac-600 mr-2" />
                  Real-Time Detection
                </h2>
                <p className="text-sm text-gray-600">
                  Harnesses the power of TensorFlow.js to detect objects like
                  people, bottles, and books instantly — right in your browser.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-lilac-600 mr-2" />
                  Privacy-First
                </h3>
                <p className="text-sm text-gray-600">
                  All video processing happens locally on your device. No data
                  is stored or sent to external servers.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg lg:p-8 p-4">
                <h4 className="text-2xl font-bold text-blue-900 mb-2 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-lilac-600 mr-2" />
                  Accessible & Modern
                </h4>
                <p className="text-sm text-gray-600">
                  Built with Next.js and Tailwind CSS, the app delivers a sleek,
                  responsive, and mobile-friendly experience for everyone to
                  experiment with AI detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


