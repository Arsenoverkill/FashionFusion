"use client";
import { useEffect, useState } from "react";
import foto1 from "@/../public/lauren-winter-20150715-IMG_0636-v1-FINAL.webp";
import foto2 from "@/../public/lauren-winter-20150715-IMG_7316-v1-FINAL.webp";
import foto3 from "@/../public/lauren-winter-20150715-IMG_9299-v1-FINAL.webp";
import Image from "next/image";
import scss from "./LookBook.module.scss";

const images = [foto1, foto2, foto3];

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
