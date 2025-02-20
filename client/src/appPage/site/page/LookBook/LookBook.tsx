"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import scss from "./LookBook.module.scss";

const images = [
  "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102934556-AV3T619Q1OCOOO86640S/lauren-winter-20150715-IMG_7316-v1-FINAL.jpg",
  "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102934573-IOHDFX1WKICPHE76ADBS/lauren-winter-20150715-IMG_9299-v1-FINAL.jpg",
  "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102934584-R3LPIOPU8EVG587CJIE0/lauren-winter-20150715-IMG_0636-v1-FINAL.jpg",
];

const LookBook = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={scss.LookBook}>
      {images.map((item, idx) => (
        <Image
          key={idx}
          width={400}
          height={600}
          src={item}
          alt="image"
          className={`${scss.image} ${
            idx === currentIndex ? scss.fadeIn : scss.fadeOut
          }`}
        />
      ))}
    </div>
  );
};

export default LookBook;
