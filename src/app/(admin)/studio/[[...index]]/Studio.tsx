"use client";
import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../../sanity.config";

const Studio = () => {
  return (
    <div
      aria-label="Sanity Studio"
      role="region"
      className="h-full w-full bg-gray-50"
    >
      {/* NextStudio component embedded */}
      <NextStudio config={sanityConfig} />
    </div>
  );
};

export default Studio;
