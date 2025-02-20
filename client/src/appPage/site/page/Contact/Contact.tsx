"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import scss from "./Contact.module.scss";

interface InputType {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const TG_TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_ID;

  const messageModel = (data: InputType) => {
    let messageTG = `WebSite: <b>FashionFusion</b>\n`;
    messageTG = `Username: <b>${data.name}</b>\n`;
    messageTG += `UserLastname: <b>${data.lastName}</b>\n`;
    messageTG += `Email: <b>${data.email}</b>\n`;
    messageTG += `Message: <b>${data.message}</b>`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      });
      alert("Successful");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contact__text}>
            <h1>Contact us.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Clothing Courtesy of Lauren Winter, Kinem and
              ULIHU
            </p>
          </div>
          <div className={scss.contact__inputs}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h2>
                  Name <span>(required)</span>
                </h2>
                <div className={scss.inputs__name}>
                  <div>
                    <span>Name</span>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                  </div>
                  <div>
                    <span>Last Name</span>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                  </div>
                </div>
              </div>
              <div>
                <h2>
                  Email <span>(required)</span>
                </h2>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <h2>
                  Message <span>(required)</span>
                </h2>
                <textarea
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p>{errors.message.message}</p>}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
