import coffeeBeans from "../assets/videos/coffeeBeans.mp4";
import Featured from "../components/Featured";
import Blogs from "../components/Blogs";

import { HomeInterface } from "../interfaces/HomeInterface";

const Home: React.FC<HomeInterface> = ({
  numberOfCartItems,
  increment,
  decrement,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center h-[573px] relative z-2 text-body-clr">
        Fresh Coffe Beans
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
