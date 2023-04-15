import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Login from "../LoginButton/LoginButton";

export default function Footer(props: any) {
  const langData = props.langData;
  return (
    <>
      <div className="hidden md:  flex text-center footer-text inherit">
        <Link href="/amitamotion/" passHref className="">
          {langData?.about_amita}
        </Link>
        <Link href="/faq/" passHref className="">
          {langData?.faq}
        </Link>
        <Link href="/tc/" passHref className="">
          {langData?.tac}
        </Link>
        <Link href="/privacy-policy/" passHref className="">
          {langData?.pp}
        </Link>
      </div>
    </>
  );
}
