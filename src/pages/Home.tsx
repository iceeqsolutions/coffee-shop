import coffeeBeans from "../assets/videos/coffeeBeans.mp4";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-[573px] relative z-2 text-body-clr">
        <video
          className="size-full -z-[1] object-cover object-bottom brightness-50 absolute"
          src={coffeeBeans}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </>
  );
};

export default Home;
