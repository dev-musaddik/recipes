import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import Head from "next/head";

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);

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
          content="/path/to/your/image.jpg" // Replace with actual image path
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://therecipescroll.vercel.app/" /> {/* Replace with your website */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://therecipescroll.vercel.app/" /> {/* Replace with your website */}
      </Head>

      <main>
        <Hero />
        <BlogContent posts={posts} />
      </main>
    </>
  );
}
