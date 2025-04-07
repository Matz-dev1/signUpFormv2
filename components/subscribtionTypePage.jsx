"use client";
import Image from "next/image";
import iconArcade from "@/public/images/icon-arcade.svg";
import iconAdvanced from "@/public/images/icon-advanced.svg";
import iconPro from "@/public/images/icon-pro.svg";
import ButtonNext from "./buttonNext";
import ButtonBack from "./buttonBack";

function SecondPage({
  onNext,
  onBack,
  isToggled,
  setIsToggled,
  currentSubscription,
  setCurrentSubscription,
  text,
}) {
  const subscriptionChoice = (option) => {
    setCurrentSubscription(data[option]);
  };

  const toggleSwitch = () => {
    setIsToggled((prev) => 1 - prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentSubscription !== null) {
      onNext();
    }
  };
  const data = [
    {
      type: "arcade",
      price: {
        0: `$9/mo`,
        1: `$90/yr`,
      },
      icon: iconArcade,
      option: 0,
    },
    {
      type: "advanced",
      price: {
        0: `$12/mo`,
        1: `$120/yr`,
      },
      icon: iconAdvanced,
      option: 1,
    },
    {
      type: "pro",
      price: {
        0: `$15/mo`,
        1: `$150/yr`,
      },
      icon: iconPro,
      option: 2,
    },
  ];
  return (
    <div className="flex flex-col h-full gap-12">
      <div>
        <h2 className="text-4xl font-bold text-[#1e126c]">Select your plan</h2>
        <p className="text-gray-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-between h-full"
      >
        {isToggled === 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-between">
              {data.map(({ type, price, icon, option }) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => subscritpionChoice(option)}
                  className={`h-40 w-35  rounded-md cursor-pointer hover:border-blue-700 ${
                    option === currentSubscribtion.option
                      ? "border-2 border-blue-500 bg-gray-100"
                      : "border-2 border-gray-400"
                  }`}
                >
                  <div>
                    <span className="flex justify-center">
                      <Image src={icon} alt={type} />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-blue-800">{type}</span>
                    <span>{price[0]}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex w-full justify-center items-center gap-4 py-2 bg-gray-200 rounded-md font-bold">
              <label
                htmlFor="priceChoice"
                className={`${
                  isToggled === 0 ? "text-black" : "text-gray-400"
                }`}
              >
                Monthly
              </label>
              <button
                type="button"
                id="priceChoice"
                onClick={toggleSwitch}
                className="relative w-16 h-8 rounded-full bg-gray-300 cursor-pointer"
              >
                <div
                  className={`flex absolute top-1 left-1 w-6 h-6 rounded-full bg-blue-500 transition-all duration-300 ease-in-out ${
                    isToggled === 0
                      ? "transform translate-x-0"
                      : "transform translate-x-8"
                  }`}
                />
              </button>
              <label
                htmlFor="priceChoice"
                className={`${
                  isToggled === 1 ? "text-black" : "text-gray-400"
                }`}
              >
                Yearly
              </label>
            </div>
          </div>
        )}
        {isToggled === 1 && (
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-between">
              {data.map(({ type, price, icon, option }) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => subscriptionChoice(option)}
                  className={`h-40 w-35  rounded-md cursor-pointer hover:border-blue-700 ${
                    option === currentSubscription.option
                      ? "border-2 border-blue-500 bg-gray-100"
                      : "border-2 border-gray-400"
                  }`}
                >
                  <div>
                    <span className="flex justify-center">
                      <Image src={icon} alt={type} />
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-blue-800">{type}</span>
                    <span>{price[1]}</span>
                    <span className=" text-blue-800">2 months free</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex w-full justify-center items-center gap-4 py-2 bg-gray-200 rounded-md font-bold">
              <label
                htmlFor="priceChoice"
                className={`${
                  isToggled === 0 ? "text-black" : "text-gray-400"
                }`}
              >
                Monthly
              </label>
              <button
                type="button"
                id="priceChoice"
                onClick={toggleSwitch}
                className="relative w-16 h-8 rounded-full bg-gray-300 cursor-pointer"
              >
                <div
                  className={`flex absolute top-1 left-1 w-6 h-6 rounded-full bg-blue-500 transition-all duration-300 ease-in-out ${
                    isToggled === 0
                      ? "transform translate-x-0"
                      : "transform translate-x-8"
                  }`}
                />
              </button>
              <label
                htmlFor="priceChoice"
                className={`${
                  isToggled === 1 ? "text-black" : "text-gray-400"
                }`}
              >
                Yearly
              </label>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-between">
          <ButtonBack onBack={onBack} />

          <ButtonNext text={text} />
        </div>
      </form>
    </div>
  );
}
export default SecondPage;
