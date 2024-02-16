import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Yellowtail } from "next/font/google";

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
})

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 sticky top-0 shadow-md">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full ">
            <ul className="flex  gap-x-5">
              <li>
                <div className="hover:scale-105 transition duration-700 ease-in-out hover:animate-pulse">
                <Logo />
              </div>
              </li>
              <li>
                <h1 className="line-clamp-1 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black to-rose-950 hover:text-white hover:scale-105 transition duration-700 ease-in-out">
                  <div className={yellowtail.className}>
                    <a href="/">
                      <p>Vicki Victoria</p>
                    </a>
                  </div>
                </h1>
              </li>
            </ul>


            <button
              type="button"
              className="items-center md:hidden display:none"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-10 text-white lg:mr-24 text-xl">
              <li>
                <Link href="/" className="hover:text-black transition duration-700 ease-in-out ">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition duration-700 ease-in-out ">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/reel" className="hover:text-black transition duration-700 ease-in-out ">
                  <p>Reel</p>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition duration-700 ease-in-out ">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
