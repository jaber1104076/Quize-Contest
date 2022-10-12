import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuize from "./SingleQuize";
import './Css/Header.css';
import { toast } from "react-toastify";

const Home = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  const handleTest = () => {
    toast.success('selected succesfully', { autoClose: 500 })
  }
  //console.log(topics)
  return (
    <section className="home-container">
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Discover Yourself
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Quize contest is design to improve Youreself
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            If you have besic knowledge about React , Javascript , html , css than you are warmly wellcome to our site . You gather  knowledge from our site.
          </p>
        </div>
        <img
          src="https://kitwind.io/assets/kometa/half-phone.png"
          className="w-full mx-auto md:w-auto md:max-w-xs"
          alt=""
        />
      </div>
      <div className="header">
        {
          topics.map(topic => <SingleQuize
            key={topic.id}
            quize={topic}
            handleTest={handleTest}
          ></SingleQuize>)
        }
      </div>
    </section>
  );
};

export default Home;
