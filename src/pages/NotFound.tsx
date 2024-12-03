import notFound from "../assets/images/notFoundBanner.jpg";
import sloth from "../assets/images/sloth.png";
// import sloth from "../assets/images/sloth2.jpg";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="mt-48 flex flex-col justify-center items-center">
        <div className="banner relative">
          <div className="absolute flex flex-col top-20 left-32 gap-20">
            <h2 className="text-8xl text-yellow-900">404...</h2>
          </div>
          <img
            src={notFound}
            alt="Contact banner"
            className="w-full bg-contain"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 p-2">
        <section className="m-10 w-1/3 flex flex-col justify-center bg-neutral-200 rounded-3xl shadow-2xl">
          <div className="m-20 flex gap-8">
            <div className="flex flex-col w-full gap-10">
              <h3 className="text-3xl text-yellow-900 uppercase font-semibold flex gap-1 items-center">
                Well this is a bit ironic...
              </h3>
              <h4 className="text-lg">
                Unfortunately our software developers ran out of coffee and left
                me with the task of fixing this page.
              </h4>
              <h4 className="text-lg">
                I will get right to it - should actually be ready in a jiffy...
              </h4>
              <img
                className="object-contain h-96 animate-wiggle"
                src={sloth}
                alt="Coffee shop"
              />
              <h4 className="text-lg">
                In the meanwhile, please visit our online shop and get yourself
                a treat!
              </h4>

              <Link
                className="px-5 pt-2 pb-3 w-fit rounded-xl text-2xl border-2 border-yellow-950 text-white bg-yellow-800 bg-opacity-75 hover:text-yellow-950  hover:bg-white hover:border-white hover:shadow-yellow-50 hover:shadow-[0_0_20px_2px]"
                to="../shop"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
