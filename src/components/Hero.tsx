import Image from "next/image";
import banner from "@/images/bannerImg.jpg";

const Hero = () => {
  return (
    <header className="w-full h-screen relative"> {/* Set a height for the header */}
      <Image
        src={banner}
        alt="A scenic banner image showcasing a photographer's work in travel and nature"
        className="object-contain"
        fill // Ensures the image takes up the full width and height of the parent container
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
