"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Logo = () => {
  return (
    <>
      <Link href="/" >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width="80"
          height="80"
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;
