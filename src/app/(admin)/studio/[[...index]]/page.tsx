import type { Metadata } from "next";
import type { Viewport } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import { viewport as studioViewport } from "next-sanity/studio/viewport";
import Studio from "./Studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Welcome to the Studio | Your Blogging Platform",
  description: "Loading the Studio... Manage your blog content and settings.",
  robots: "index, follow", // Ensure search engines index this page
  openGraph: {
    title: "Welcome to the Studio | Your Blogging Platform",
    description: "Manage your blog posts and settings with ease in the Studio.",
    url: "https://yourwebsite.com/studio", // Replace with the actual URL
    type: "website",
  },
};

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: "resizes-content",
};

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
