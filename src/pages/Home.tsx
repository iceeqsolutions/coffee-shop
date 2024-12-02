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
      <div className="mt-48 flex flex-col justify-center h-[573px] relative z-2 text-body-clr">
        <div className="h-80 bannerHeading flex flex-col justify-between absolute top-24 left-24">
          <h1>Fresh coffee from around the world...</h1>
          <Link
            className="ml-10 px-5 pt-2 pb-3 w-fit rounded-xl text-2xl text-white border-2 border-white bg-opacity-75  hover:bg-white hover:text-yellow-950 hover:shadow-yellow-50 hover:shadow-[0_0_20px_2px]"
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
