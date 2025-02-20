"use client";
import React, { useState } from "react";
import scss from "./Home.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetTodoQuery } from "@/redux/api/todo";

const Home = () => {
  const { data } = useGetTodoQuery();
  const [category, setCategory] = useState("All");

  const router = useRouter();

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.category}>
            {category == "All" ? (
              <>
                <h4 onClick={() => setCategory("Tops")}>Tops</h4>
                <div></div>
                <h4 onClick={() => setCategory("Bottoms")}>Bottoms</h4>
                <div></div>
                <h4 onClick={() => setCategory("Sale")}>Sale</h4>
              </>
            ) : (
              <h4 onClick={() => setCategory("All")}>All /</h4>
            )}
          </div>
          <hr />
          <div className={scss.dressBlocks}>
            {category == "All"
              ? data?.map((item) => (
                  <div
                    onClick={() => router.push(`/detail/${item._id}`)}
                    className={scss.dressBlock}
                    key={`${item._id}-${category}`}
                  >
                    <div className={scss.images}>
                      <Image
                        className={scss.image}
                        width={300}
                        height={340}
                        src={item.image}
                        alt="image"
                      />
                      <Image
                        className={scss.imageHover}
                        width={300}
                        height={340}
                        src={item.imageHover}
                        alt="image"
                      />
                    </div>
                    <h2>{item.title}</h2>
                    <h4>${item.price},00</h4>
                  </div>
                ))
              : data?.map((item) =>
                  item.category == category ? (
                    <div
                      onClick={() => router.push(`/detail/${item._id}`)}
                      className={scss.dressBlock}
                      key={`${item._id}-${category}`}
                    >
                      <div className={scss.images}>
                        <Image
                          className={scss.image}
                          width={300}
                          height={340}
                          src={item.image}
                          alt="image"
                        />
                        <Image
                          className={scss.imageHover}
                          width={300}
                          height={340}
                          src={item.imageHover}
                          alt="image"
                        />
                      </div>
                      <h2>{item.title}</h2>
                      <h4>${item.price}.00</h4>
                    </div>
                  ) : (
                    ""
                  )
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
