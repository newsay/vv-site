import React from "react";
import Link from "next/link"; import { Yellowtail } from "next/font/google";

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
})

const Footer = () => {
  return (
    <>
      <div className="w-full h-20 bg-transparent fixed bottom-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-end items-center h-full">
            <ul className="flex gap-x-4 md:mr-1">
              <li>
                <button
                  type="button"
                  className="rounded-full p-3 hover:shadow-md transition duration-150 ease-in-out hover:scale-105 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                >
                  <a href="/contact">
                    <svg
                      className="h-10 w-10 fill-white hover:fill-black"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="rounded-full p-3 hover:shadow-md transition duration-150 ease-in-out hover:scale-105 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                >
                  <a href="/contact">
                    <svg
                      className="h-10 w-10 fill-white hover:fill-black"
                      viewBox="0 0 512 512">
                      <path
                        d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </a>
                </button>
              </li>
              <li>


                <button
                  type="button"
                  className="rounded-full p-3 hover:shadow-md transition duration-150 ease-in-out hover:scale-105 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                >
                  <a href="/contact">
                    <svg
                      className="h-10 w-10 fill-white hover:fill-black"
                      viewBox="0 0 512 512">
                      <path
                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                    </svg>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
