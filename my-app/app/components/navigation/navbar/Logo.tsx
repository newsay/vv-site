"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Logo = () => {
  return (
    <>
      <a href="/" >
        <img
          src="/images/logo.svg"
          width="50"
          height="50"
          className="relative hover:animate-spin"
        />
      </a>
    </>
  );
};

export default Logo;
