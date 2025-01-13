import Image from "next/image";
import banner from "@/images/bannerImg.jpg";

const Hero = () => {
  return (
    <header className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="A scenic banner image showcasing a photographer's work in travel and nature"
        className="w-full max-h-screen object-contain"
        layout="responsive" // Adjusts image size dynamically based on the container size
        priority // Loads the image early for performance
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-7xl lg:text-[150px] font-bold">
          Tailor Smith
        </h1>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Traveler, Photographer
        </p>
      </div>
    </header>
  );
};

export default Hero;
