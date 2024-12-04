import coffeeBeans from "../assets/videos/coffeeBeans.mp4";
import Featured from "../components/Featured";
import Blogs from "../components/Blogs";
import { Link } from "react-router-dom";

import { HomeInterface } from "../interfaces/HomeInterface";

const Home: React.FC<HomeInterface> = ({
  numberOfCartItems,
  increment,
  decrement,
}) => {
  return (
    <>
      <div className="mt-56 desktop:mt-0 flex flex-col justify-center h-[350px] relative z-2 text-body-clr">
        <div className="h-52 bannerHeading flex flex-col justify-between absolute top-20 left-24 desktop:left-16">
          <h1 className="font-charm text-white text-6xl italic desktop:text-5xl">
            Fresh coffee from around the world...
          </h1>
          <Link
            className="ml-10 mt-5 px-5 pt-2 pb-3 w-fit rounded-xl text-2xl text-white border-2 border-white bg-opacity-75  hover:bg-white hover:text-yellow-950 hover:shadow-yellow-50 hover:shadow-[0_0_20px_2px]"
            to="./shop"
          >
            Shop Now
          </Link>
        </div>
        <video
          className="size-full -z-[1] object-cover object-bottom brightness-50 absolute"
          src={coffeeBeans}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <Featured
        numberOfCartItems={numberOfCartItems}
        increment={increment}
        decrement={decrement}
      />
      <Blogs />
    </>
  );
};

export default Home;
