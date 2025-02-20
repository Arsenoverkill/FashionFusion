"use client";
import React, { useEffect, useState } from "react";
import scss from "./Basket.module.scss";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useLayoutContext } from "../../layout/LayoutPage";

const Basket = () => {
  const { count, setCount } = useLayoutContext();

  const [basketData, setBasketData] = useState<Todo[]>([]);
  const [productDelete, setProductDelete] = useState<number | null>();

  const toastDelete = () => toast("Item has been removed from your cart ✅");

  function getBasketProduct() {
    const getFromLocalStorage = (key: string): string | null => {
      return localStorage.getItem(key);
    };

    const value = JSON.parse(getFromLocalStorage("basketProduct") || "[]");
    setBasketData(value.reverse());
  }
  function basketProductPlus(item: Todo) {
    const getFromLocalStorage = (key: string): string | null => {
      return localStorage.getItem(key);
    };

    const value: Todo[] = JSON.parse(
      getFromLocalStorage("basketProduct") || "[]"
    );
    value.map((el) => {
      if (el._id === item._id && el.sizeProduct == item.sizeProduct) {
        el.quantity += 1;
      }
    });
    localStorage.setItem("basketProduct", JSON.stringify(value));
    getBasketProduct();
  }
  function basketProductMinus(item: Todo) {
    const getFromLocalStorage = (key: string): string | null => {
      return localStorage.getItem(key);
    };

    const value: Todo[] = JSON.parse(
      getFromLocalStorage("basketProduct") || "[]"
    );
    value.map((el) => {
      if (
        el._id === item._id &&
        el.quantity > 1 &&
        el.sizeProduct == item.sizeProduct
      ) {
        el.quantity -= 1;
      }
    });
    localStorage.setItem("basketProduct", JSON.stringify(value));
    getBasketProduct();
  }
  function basketProductDelete(item: Todo) {
    const getFromLocalStorage = (key: string): string | null => {
      return localStorage.getItem(key);
    };

    const value: Todo[] = JSON.parse(
      getFromLocalStorage("basketProduct") || "[]"
    );
    const updatedValue = value.filter((el) => {
      return !(el.sizeProduct === item.sizeProduct && el._id === item._id);
    });
    localStorage.setItem("basketProduct", JSON.stringify(updatedValue));
    setCount(count - 1);
    setProductDelete(null);
    toastDelete();
    getBasketProduct();
  }
  useEffect(() => {
    getBasketProduct();
  }, []);
  return (
    <div id={scss.Basket}>
      <div className="container">
        <div className={scss.basket}>
          <h2>Shopping Cart</h2>
          <div className={scss.basket__products}>
            {basketData.map((item, idx) => (
              <div
                style={{
                  opacity: idx == productDelete ? "40%" : "",
                }}
                key={`${item._id}-${idx}`}
              >
                <div className={scss.basket__product}>
                  <div
                    style={{ display: idx == productDelete ? "block" : "" }}
                    className={scss.loader}
                  ></div>

                  <div className={scss.product__info}>
                    <Image
                      width={150}
                      height={170}
                      src={item.image}
                      alt="image"
                    />
                    <div>
                      <h4>{item.title}</h4>
                      <p>Size: {item.sizeProduct}</p>
                    </div>
                  </div>
                  <div className={scss.product__price}>
                    <div className={scss.product__quantity}>
                      <span
                        onClick={() => basketProductMinus(item)}
                        className={scss.product__minus}
                        style={{
                          opacity: item.quantity > 1 ? "" : "30%",
                        }}
                      ></span>
                      <p>{item.quantity}</p>
                      <span
                        onClick={() => basketProductPlus(item)}
                        className={scss.product__plus}
                      >
                        +
                      </span>
                    </div>
                    <div>
                      <h4>${item.price * item.quantity}.00</h4>
                      <div className={scss.delete__block}>
                        <span
                          onClick={() => {
                            setProductDelete(idx);
                            setTimeout(() => {
                              basketProductDelete(item);
                            }, 1000);
                          }}
                          className={scss.product__delete}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <ToastContainer />
              </div>
            ))}
          </div>
          <div className={scss.basket__totalPrice}>
            <div>
              <div>
                <h2>Subtotal</h2>
                <h2>$250.00</h2>
              </div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
