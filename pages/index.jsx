import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PopupModel from "../src/popupModel";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className={`${styles.container} `}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col  items-center justify-center">
        <section className=" p-10 rounded border-2 border-black  text-center">
          <h1 className="text-7xl md:text-9xl font-bold ">JUST</h1>
          <h2 className="text-3xl md:text-5xl">Law School</h2>
        </section>
        <p className="text-lg md:text-2xl text-center m-3 md:m-5">
          Everything about legal education <br /> is about to change
        </p>
        <div>
          <div className="flex-row sm:flex-col m-2">
            <input
              className={`sm:w-96 border-2 border-black rounded sm:rounded-br-none sm:rounded-tr-none w-full p-1 ${
                error && "border-red-500"
              }`}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              type={"email"}
            />
            <PopupModel
              onClick={() => {
                if (
                  email &&
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                ) {
                  setError(false);
                  axios
                    .post("http://localhost:3000/api/email", {
                      email,
                    })
                    .then((res) => {
                      setEmail("");
                      setDisplayPopup(true);
                    })
                    .catch((err) => {
                      console.log({ err });
                    });
                } else {
                  setError(true);
                }
              }}
              displayPopup={displayPopup}
              hidePopup={() => setDisplayPopup(false)}
              className="px-4 border-l-0 bg-black text-white border-2 border-black rounded mt-1 w-full sm:w-auto sm:mt-0 sm:rounded-bl-none sm:rounded-tl-none p-1 "
            >
              Apply for <span className="font-bold">Early Access</span>
            </PopupModel>
          </div>
          {error && (
            <p className="text-red-500 text-center sm:text-left ml-2">
              Enter valid email address{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}