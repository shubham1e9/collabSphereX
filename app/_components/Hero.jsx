import React from "react";

function Hero() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative ml-auto pt-17">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
              This is where{" "}
              <span className="text-primary dark:text-white">
                work happens, in sync.
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              A collaborative workspace that lets teams create, share, and work
              together on projects seamlessly. It combines flexible pages with
              reusable components that sync across different apps, making it
              easy to stay organized and up-to-date.
            </p>
            <div className="flex flex-wrap justify-center mt-10 gap-y-4 gap-x-6">
              <a
                href="/dashboard"
                className="relative flex items-center justify-center w-full px-6 h-11 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </a>
              <a
                href="#"
                className="relative flex items-center justify-center w-full px-6 h-11 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </a>
            </div>
            <div className="flex flex-wrap justify-around py-8 bg-gray-50 dark:bg-gray-900">
              {[
                {
                  title: "The lowest price",
                  description: "Unbeatable prices that won't break the bank!",
                  icon: "💲",
                },
                {
                  title: "The fastest on the market",
                  description:
                    "Experience lightning-fast performance that outpaces the competition!",
                  icon: "⚡",
                },
                {
                  title: "The most loved",
                  description:
                    "Join the countless satisfied customers who adore our product!",
                  icon: "❤️",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex-1 max-w-md p-6 mx-4 my-2 text-center transition duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
                  style={{ minWidth: "230px" }}
                >
                  <div className="mb-1 text-2xl">{feature.icon}</div>
                  <h6 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {feature.title}
                  </h6>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
