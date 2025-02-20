import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <h1>About Us</h1>
        <p>Learn more about our company and our values</p>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102938080-4ZOZGSNDL8NE36JY5URS/image-asset.jpeg"
            alt="Our Office"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>Our Story</h2>
          <p>
            Welcome to FashionFusion, where fashion meets passion! Founded in
            2024, we have quickly become a go-to destination for fashion
            enthusiasts looking for unique and stylish apparel. Our journey
            began with a simple yet ambitious goal: to offer high-quality
            clothing that makes a statement.
          </p>
          <p>
            At FashionFusion, we believe that fashion is a form of
            self-expression. Our curated collections are designed to empower
            individuals to showcase their unique style and personality. From the
            latest trends to timeless classics, we offer a diverse range of
            clothing that caters to various tastes and occasions.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide our customers with exceptional fashion
            choices that not only look good but also feel good. We are committed
            to sourcing the finest materials and ensuring that every piece of
            clothing meets our high standards of quality and craftsmanship.
          </p>
          <p>
            We understand that fashion is constantly evolving, and so are we.
            Our team of dedicated designers and fashion experts work tirelessly
            to bring you the latest styles and trends. We strive to create a
            shopping experience that is both enjoyable and inspiring.
          </p>
          <h2>Our Values</h2>
          <p>
            Integrity, creativity, and customer satisfaction are the
            cornerstones of our business. We take pride in our ethical practices
            and are dedicated to maintaining transparency in all aspects of our
            operations. Our customers are at the heart of everything we do, and
            their happiness is our top priority.
          </p>
          <p>
            We are also committed to sustainability and are constantly seeking
            ways to reduce our environmental impact. From eco-friendly packaging
            to sustainable sourcing practices, we are taking steps to ensure a
            greener future for the fashion industry.
          </p>
          <h2>Join Our Community</h2>
          <p>
            Fashion is more than just clothing; it's a community. We invite you
            to join our growing community of fashion enthusiasts and stay
            connected with us through our social media channels. Follow us for
            the latest updates, style tips, and exclusive offers.
          </p>
          <p>
            Thank you for choosing FashionFusion. We look forward to helping you
            express your unique style and be your best-dressed self.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
