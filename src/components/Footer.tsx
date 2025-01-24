import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 p-10">
      <Container className="flex items-center justify-between">
        <Logo title="Bloggers" className="text-white" />
        <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
          >
            <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link
            href={"https://github.com/noorjsdivs"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our GitHub profile"
          >
            <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
          </Link>
          <Link
            href={"https://www.facebook.com/yourpage"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <BsFacebook className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
          </Link>
          <Link
            href={"https://www.instagram.com/yourpage"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <BsInstagram className="text-2xl hover:text-purple-500 duration-200 cursor-pointer" />
          </Link>
        </div>
        <p className="text-sm text-gray-300">
          © All rights reserved{" "}
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white font-semibold duration-200"
            aria-label="Visit our YouTube channel"
          >
            @reactjsBD
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
