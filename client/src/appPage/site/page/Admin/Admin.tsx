"use client";
import { usePostTodoMutation } from "@/redux/api/todo";
import React from "react";

const Admin = () => {
  const [postTodoMutatin] = usePostTodoMutation();

  async function postDress() {
    const dressObj = {
      title: "Sonia Skirt",
      price: 50,
      image:
        "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102915698-TYNMQCDKR8G7TGCWYQMR/lauren-winter-sonia-skirt-grey_0270-v1-FINAL-copy.jpg",
      imageHover:
        "https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102915709-FQA0TSODVVZKY3FIZV30/lauren-winter-sonia-skirt-grey_DETAIL.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      size: [0, 2, 4, 6],
      quintity: 1,
      category: "Tops",
    };
    await postTodoMutatin(dressObj);
  }
  return (
    <div>
      <button onClick={postDress}>Add Product</button>
    </div>
  );
};

export default Admin;
