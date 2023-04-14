import React, { useState } from "react";
import "./Home.css";
import Buttonstart from "../Button/Buttonstart";
import useRegisterModal from "../../../hooks/useRegisterModal";

export default function Home() {
  const registerModal = useRegisterModal();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  const [email, setEmail] = useState('');

  const start = () => {
    registerModal.email = email;
    registerModal.onOpen();
  }

  return (
    <>
      <div className="Section2">
        <img
          className="Lineimg"
          src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
          alt=""
          width="400px"
        />
        <div className="container mt-10">
          <form onSubmit={submitHandler}>
            <div className="intro">
              <h1>Let's build from here</h1>
              <span className="description">
                Harnessed for productivity. Designed for collaboration.
                Celebrated for built-in security. Welcome to the platform
                developers love
              </span>
              <div className="input mt-24">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your E-mail Here"
                  className="placeholder:font-sans placeholder:text-lg pl-4 caret-gray-300 pt-3 pb-2 text-xl text-black"
                />
                <Buttonstart label={"Get Started"} functionHandler={start} />
              </div>
            </div>
          </form>
          <img
            className="moon"
            src="https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/moon.png"
            alt=""
            width="300px"
            height="350px"
          ></img>
        </div>
      </div>
    </>
  );
}
