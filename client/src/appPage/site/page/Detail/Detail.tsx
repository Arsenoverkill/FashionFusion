"use client";
import React, { useState } from "react";
import { useGetTodoQuery } from "@/redux/api/todo";
import { useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrow from "@/images/arrow.png";
import Image from "next/image";
import scss from "./Detail.module.scss";
import Link from "next/link";
import { useLayoutContext } from "../../layout/LayoutPage";

const Detail: React.FC = () => {
  const { count, setCount } = useLayoutContext();
  const [lookImage, setLookImage] = useState<boolean>(false);
  const [sizeBlock, setSizeBlock] = useState<string>("");
  const [sizeBlockIsNot, setSizeBlockIsNot] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeProduct, setSizeProduct] = useState<number>();
  const [loading, setLoading] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTodoQuery();

  const Successfull = () => {
    toast.success("Successful Added ✅", {
      toastId: "success-toast",
    });
  };

  const Unsuccessfull = () => {
    toast.error("Please selected the Size ❌", {
      toastId: "error-toast",
    });
  };

  function postProduct(item: Todo) {
    const getFromLocalStorage = (key: string): string | null => {
      return localStorage.getItem(key);
    };

    let value: Todo[] = JSON.parse(
      getFromLocalStorage("basketProduct") || "[]"
    );

    if (sizeProduct !== undefined) {
      const newObj: Todo = { ...item, quantity, sizeProduct };

      let itemUpdated = false;

      if (value.length > 0) {
        value = value.map((el: Todo) => {
          if (el._id === item._id && el.sizeProduct === sizeProduct) {
            itemUpdated = true;
            return {
              ...el,
              quantity: el.quantity + item.quantity,
            };
          }
          return el;
        });

        if (!itemUpdated) {
          value.push(newObj);
        }
      } else {
        value.push(newObj);
      }

      localStorage.setItem("basketProduct", JSON.stringify(value));
      setCount(count + 1);
      setLoading("fulfilled");
      Successfull();
    } else {
      setLoading("error");
      Unsuccessfull();
    }

    setLoading("");
  }

  if (!data) return;

  return (
    <div id={scss.Detail}>
      <div className="container">
        <h3>
          <Link href="/">Shop</Link> <span>{">"}</span>
          {data.map((item) => (item._id == Number(id) ? item.title : null))}
        </h3>
        <div className={scss.detailPart}>
          {data.map((item) =>
            item._id == Number(id) ? (
              <div className={scss.product} key={item._id}>
                <div className={scss.product__images}>
                  <div className={scss.images__mini}>
                    <Image
                      onClick={() => setLookImage(false)}
                      width={50}
                      height={60}
                      src={item.image}
                      alt="image"
                    />
                    <Image
                      onClick={() => setLookImage(true)}
                      width={50}
                      height={60}
                      src={item.imageHover}
                      alt="image"
                    />
                  </div>
                  <div className={scss.images__appearance}>
                    <Image
                      onClick={() => setLookImage(!lookImage)}
                      width={50}
                      height={70}
                      src={arrow}
                      alt="arrow"
                    />
                    <Image
                      onClick={() => setLookImage(!lookImage)}
                      width={50}
                      height={70}
                      src={arrow}
                      alt="arrow"
                    />
                    <Image
                      style={{
                        opacity: !lookImage ? "100" : "0",
                        visibility: !lookImage ? "visible" : "hidden",
                      }}
                      width={550}
                      height={600}
                      src={item.image}
                      alt="image"
                    />
                    <Image
                      style={{
                        opacity: lookImage ? "100" : "0",
                        visibility: lookImage ? "visible" : "hidden",
                      }}
                      width={550}
                      height={600}
                      src={item.imageHover}
                      alt="image"
                    />
                  </div>
                </div>
                <div className={scss.product__plot}>
                  <h1>{item.title}</h1>
                  <h2>${item.price}.00</h2>
                  <h3>DESCRIPTION</h3>
                  <p>{item.description}</p>
                  <h3>DETAILS</h3>
                  <ul>
                    <li>100% Cotton </li>
                    <li>Machine wash cold</li>
                    <li>Tumble dry low</li>
                  </ul>
                  <h3>Size:</h3>
                  <div className={scss.product__size}>
                    <div
                      onMouseOver={() =>
                        item.size.includes(0) ? "" : setSizeBlockIsNot("-0")
                      }
                      onMouseLeave={() => setSizeBlockIsNot("")}
                      onClick={() => {
                        setSizeBlock("0");
                        if (item.size.includes(0)) {
                          setSizeProduct(0);
                        }
                      }}
                      style={{
                        opacity: sizeBlockIsNot == "-0" ? "40%" : "100%",
                        cursor:
                          sizeBlockIsNot == "-0" ? "not-allowed" : "pointer",
                        background: sizeBlock == "0" ? "black" : "",
                        color: sizeBlock == "0" ? "white" : "",
                      }}
                    >
                      0
                    </div>
                    <div
                      onMouseOver={() =>
                        item.size.includes(2) ? "" : setSizeBlockIsNot("-2")
                      }
                      onMouseLeave={() => setSizeBlockIsNot("")}
                      onClick={() => {
                        setSizeBlock("2");
                        if (item.size.includes(2)) {
                          setSizeProduct(2);
                        }
                      }}
                      style={{
                        opacity: sizeBlockIsNot == "-2" ? "40%" : "100%",
                        cursor:
                          sizeBlockIsNot == "-2" ? "not-allowed" : "pointer",
                        background: sizeBlock == "2" ? "black" : "",
                        color: sizeBlock == "2" ? "white" : "",
                      }}
                    >
                      2
                    </div>
                    <div
                      onMouseOver={() =>
                        item.size.includes(4) ? "" : setSizeBlockIsNot("-4")
                      }
                      onMouseLeave={() => setSizeBlockIsNot("")}
                      onClick={() => {
                        setSizeBlock("4");
                        if (item.size.includes(4)) {
                          setSizeProduct(4);
                        }
                      }}
                      style={{
                        opacity: sizeBlockIsNot == "-4" ? "40%" : "100%",
                        cursor:
                          sizeBlockIsNot == "-4" ? "not-allowed" : "pointer",
                        background: sizeBlock == "4" ? "black" : "",
                        color: sizeBlock == "4" ? "white" : "",
                      }}
                    >
                      4
                    </div>
                    <div
                      onMouseOver={() =>
                        item.size.includes(6) ? "" : setSizeBlockIsNot("-6")
                      }
                      onMouseLeave={() => setSizeBlockIsNot("")}
                      onClick={() => {
                        setSizeBlock("6");
                        if (item.size.includes(6)) {
                          setSizeProduct(6);
                        }
                      }}
                      style={{
                        opacity: sizeBlockIsNot == "-6" ? "40%" : "100%",
                        cursor:
                          sizeBlockIsNot == "-6" ? "not-allowed" : "pointer",
                        background: sizeBlock == "6" ? "black" : "",
                        color: sizeBlock == "6" ? "white" : "",
                      }}
                    >
                      6
                    </div>
                    <div
                      onMouseOver={() =>
                        item.size.includes(8) ? "" : setSizeBlockIsNot("-8")
                      }
                      onMouseLeave={() => setSizeBlockIsNot("")}
                      onClick={() => {
                        if (item.size.includes(8)) {
                          setSizeBlock("8");
                          setSizeProduct(8);
                        }
                      }}
                      style={{
                        opacity: sizeBlockIsNot == "-8" ? "40%" : "100%",
                        cursor:
                          sizeBlockIsNot == "-8" ? "not-allowed" : "pointer",
                        background: sizeBlock == "8" ? "black" : "",
                        color: sizeBlock == "8" ? "white" : "",
                      }}
                    >
                      8
                    </div>
                  </div>
                  <h3>Quantity:</h3>
                  <div className={scss.product__quantity}>
                    <button
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : quantity)
                      }
                    >
                      <span className={scss.quantity__button}>-</span>
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                      <span className={scss.quantity__button}>+</span>
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setLoading("pending");
                      setTimeout(() => {
                        postProduct(item);
                      }, 2500);
                    }}
                    className={scss.product__button}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: loading == "pending" ? "100" : "0",
                        visibility: loading == "pending" ? "visible" : "hidden",
                      }}
                    >
                      <h5>Loading</h5>
                      <div className="typing-indicator">
                        <div className="typing-circle"></div>
                        <div className="typing-circle"></div>
                        <div className="typing-circle"></div>
                        <div className="typing-shadow"></div>
                        <div className="typing-shadow"></div>
                        <div className="typing-shadow"></div>
                      </div>
                    </div>
                    <h4
                      style={{
                        opacity: loading == "" ? "100" : "0",
                        visibility: loading == "" ? "visible" : "hidden",
                      }}
                    >
                      Add To Cart
                    </h4>
                  </button>
                  <ToastContainer />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
