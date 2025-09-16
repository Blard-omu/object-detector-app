import shapeBG from "../../../public/Images/BackgroundImage.png";


const Usage = () => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative flex flex-1 flex-col w-full lg:min-h-[500px] md:min-h-[300px] min-h-[100px] lg:p-8 md:p-4 p-2">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${shapeBG.src})` }}
        ></div>
        <div className="flex flex-col items-center justify-center relative z-10 px-4 md:pt-12 text-center">
          <h1 className="lg:text-4xl md:text-2xl font-bold text-white mt-8 text-center">
            HOW TO USE THE APP PERFECTLY
          </h1>
          <p className="md:text-sm text-xs  text-white text-center md:mt-4 mt-2 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 lg:bottom-0 md:-bottom-24 -bottom-18 -translate-x-1/2 translate-y-1/2 z-20 w-full flex justify-center">
        <div className="relative rounded-3xl overflow-hidden w-11/12 sm:w-4/5 md:w-3/4 lg:max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/Tq-2IwLg7f8?si=pi653u0Qv4d_ii9F"
            title="YouTube video player"
            className="w-full object-cover h-[150px] md:h-[250px] lg:h-[300px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
};

export default Usage;
