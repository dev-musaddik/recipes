'use client';

import { useEffect } from 'react';
import AdBanner from "@/components/AddBanner";
import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import Head from "next/head";

// Define the type for a post
interface Post {
  _id: string;
  title: string;
  mainImage?: string;
  author: {
    name: string;
  };
  categories: Array<{ title: string }>;
}

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]-> 
} | order(_createdAt asc)`;

const CrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ce3009c0-a6ce-4124-8244-f239727b7d91";
    const script = document.createElement('script');
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }, []); // Empty array means this runs only once, on mount

  return null; // Don't render any UI, just load the script
};

// In Next.js 13+ using the app directory, you can directly fetch inside the component

export default async function Home() {
  try {
    const posts: Post[] = await client.fetch(query);

    return (
      <>
        <Head>
          <title>Tailor Smith - Traveler, Photographer</title>
          <meta
            name="description"
            content="Tailor Smith is a talented traveler and photographer, sharing stories and visuals from his journeys around the world."
          />
          <meta
            property="og:title"
            content="Tailor Smith - Traveler, Photographer"
          />
          <meta
            property="og:description"
            content="Tailor Smith is a talented traveler and photographer, sharing stories and visuals from his journeys around the world."
          />
          <meta
            property="og:image"
            content={posts[0]?.mainImage || "/default-image.jpg"} // Dynamic image path
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://therecipescroll.vercel.app/" // Replace with your website
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://therecipescroll.vercel.app/" // Replace with your website
          />
        </Head>

        <main>
          <Hero />
          <AdBanner
            dataAdSlot="3063439776"
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
          />
          <BlogContent posts={posts} />
        </main>
        <CrispChat />
      </>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p>Error loading content. Please try again later.</p>;
  }
}
