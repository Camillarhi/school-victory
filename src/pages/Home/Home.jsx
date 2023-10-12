import React, { useEffect } from "react";
import {
  Bag,
  Bar,
  Boy,
  Chart,
  Graph,
  PieChart,
  Score,
} from "../../assets/svgs";
import Button from "../../components/Button";

export default function Home() {
  useEffect(() => {
    async function run() {
      // A service worker must be registered in order to send notifications on iOS
      const registration = await navigator.serviceWorker.register(
        "serviceworker.js",
        {
          scope: "./",
        }
      );

      const button = document.getElementById("subscribe");
      button.addEventListener("click", async () => {
        // Triggers popup to request access to send notifications
        const result = await window.Notification.requestPermission();

        // If the user rejects the permission result will be "denied"
        if (result === "granted") {
          // You must use the service worker notification to show the notification
          // Using new Notification("Hello World", { body: "My first notification on iOS"}) does not work on iOS
          // despite working on other platforms
          await registration.showNotification("Hello World", {
            body: "My first notification on iOS",
          });
        }
      });
    }

    run();
  }, []);

  return (
    <div
      className=" flex flex-col md:flex-row gap-x-[2.3125rem] gap-y-2 md:mt-[6.25rem] mt-2"
      id="home"
    >
      <div className=" md:w-1/2 md:h-[42.625rem] h-[34.625rem] flex justify-center items-center px-2 md:px-0">
        <div className=" flex flex-col gap-y-[1.875rem] bg-white">
          <p className=" text-primary font-bold tracking-[.0063rem]">Online</p>
          <h3 className=" text-text-color md:text-[3.625rem] text-[2.5rem] md:leading-[5rem] font-bold md:w-[33.875rem]">
            HIGH QUALITY COURSES{" "}
          </h3>
          <button
            id="subscribe"
            className=" bg-black text-white w-40 h-10"
            type="button"
          >
            Subscribe
          </button>
          <p className=" w-[28.625rem] text-xl leading-[1.875rem] tracking-[.0125rem] text-second-text-color">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className=" flex gap-x-[.625rem]">
            <Button
              text="Get Quote Now"
              className=" text-white bg-primary"
              size="large"
            />
            <Button
              text="Learn More"
              className=" text-primary border border-primary"
              size="large"
            />
          </div>
        </div>
      </div>

      <div className=" md:w-1/2 md:h-[42.625rem] h-[34.625rem] w-[80%] self-center flex justify-center items-center relative md:mr-[2.25rem] px-2 md:px-0">
        <div className="md:w-[80%] md:h-[80%] w-[89%] h-[45%] bg-[#AAEAD0] rounded-full absolute"></div>
        <img src={Boy} alt="boy" className=" absolute left-1" />
        <img
          src={Bag}
          alt="bag"
          className=" absolute right-[1.6531rem] md:top-[4.3487rem] top-[8.3487rem] md:w-[3.0441rem] md:h-[3.0441rem] w-[2.375rem] h-[2.375rem]"
        />
        <div className=" md:w-[3.7531rem] md:h-[3.7531rem] w-[2.2031rem] h-[2.2031rem] bg-blue-600 absolute flex justify-center items-center rounded-lg md:-left-[3.3163rem] -left-[2.2163rem]">
          <img
            src={Graph}
            alt="graph"
            className=" md:w-[1.7751rem] md:h-[1.7751rem] w-[1.1501rem] h-[1.1501rem] "
          />
        </div>
        <img
          src={Chart}
          alt="chart"
          className=" absolute md:top-[4.375rem] top-[6.375rem] md:-left-[1.0081rem] -left-[2.0081rem] md:w-[11.1478rem] md:h-[11.1478rem] w-[7.5978rem] h-[7.5978rem]"
        />
        <img
          src={Score}
          alt="score"
          className=" absolute md:bottom-[6.415rem] bottom-[7.715rem] -left-[1.4312rem] md:w-[18.3445rem] md:h-[12.5589rem] w-[203.512px] h-[110.943px]"
        />
        <div className=" md:w-[3.7531rem] md:h-[3.7531rem] w-[2.2031rem] h-[2.2031rem] bg-blue-600 absolute flex justify-center items-center rounded-lg md:bottom-[1.8625rem] bottom-[6.2625rem]">
          <img
            src={Bar}
            alt="bar"
            className=" md:w-[2.333rem] md:h-[2.333rem] w-[27.328px] h-[27.328px]"
          />
        </div>{" "}
        <img
          src={PieChart}
          alt="pie-chart"
          className=" absolute md:bottom-[5.78rem] bottom-[6.78rem] right-[1.0081rem] md:right-[4.0081rem] md:w-[13.6878rem] md:h-[12.7706rem] w-[8.0628rem] h-[7.1456rem]"
        />
      </div>
    </div>
  );
}
