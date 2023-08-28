/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import "./PodcastBanner.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const PodcastBanner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <motion>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        className="custom-slider  "
      >
        <div className="relative  mt-10">
          <Image
            src="https://i.ibb.co/sgc4Bdh/gold-microphone-black-headphones-sound-wave-yellow-background-3d-rendering-494516-1985.jpg"
            alt="banner image"
            width={1200}
            height={600}
            className="block lg:h-[800px]  h-[300px] lg:w-full max-w-screen-[500px]"
          ></Image>
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl  text-2xl font-bold">
                Music Extravaganza
              </h2>
              <p className="text-gray-200 text-xs lg:text-base ">
                Dive into the rhythm of life with our music-packed episodes,
                where we explore the world's melodies, beats, and stories behind
                the tunes that shape our lives.
              </p>
              <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative  mt-10">
          <Image
            src="https://i.ibb.co/2ZW6gg6/old-fashion-retro-silver-red-color-chrome-with-button-design-microphone-cement-background-146508-32.jpg"
            alt="banner image"
            width={1200}
            height={500}
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
          ></Image>
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl  text-2xl font-bold">
                Live Events Unplugged
              </h2>
              <p className="text-gray-200 text-xs lg:text-base ">
                Be part of the excitement! Join us for live event coverage that
                brings you closer to the action, from concerts to exclusive
                behind-the-scenes access.
              </p>
              <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative  mt-10">
          <Image
            src="https://i.ibb.co/NVBjwqT/morning-air-radio-stream-banner-1419-2132.jpg"
            width={1200}
            height={600}
            alt="banner image"
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
          ></Image>
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl  text-2xl font-bold">
                Human Chronicles
              </h2>
              <p className="text-gray-200 text-xs lg:text-base ">
                Explore the incredible tapestry of human experiences. Listen to
                real-life stories, journeys, and insights that inspire,
                entertain, and remind us of our shared humanity.
              </p>
              <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative  mt-10">
          <Image
            src="https://i.ibb.co/XzKjbLT/microphone-acoustic-isolation-foam-23-2148695273.jpg"
            width={1200}
            height={600}
            alt="banner image"
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
          ></Image>
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl  text-2xl font-bold">
                The Radio Jokki Experience
              </h2>
              <p className="text-gray-200 text-xs lg:text-base ">
                Join us in our eclectic audio adventures, where humor, stories,
                and creativity come together to reflect the joys and quirks of
                daily life.
              </p>
              <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative  mt-10">
          <Image
            src="https://i.ibb.co/x7b0zQ3/modern-microphone-144627-41309.jpg"
            alt="banner image"
            width={1200}
            height={600}
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
          ></Image>
          <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl  text-2xl font-bold">
                Enlightening Lectures
              </h2>
              <p className="text-gray-200 text-xs lg:text-base ">
                Expand your knowledge and perspective with enlightening
                lectures, spanning a wide range of topics, from Islamic
                teachings to thought-provoking discussions that ignite the mind.
              </p>
              <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </AutoplaySlider>
    </motion>
  );
};

export default PodcastBanner;
