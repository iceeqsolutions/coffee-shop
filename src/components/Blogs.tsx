import blogTexts from "../assets/texts/blogTexts.tsx";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="px-6 text-2xl text-yellow-950 self-baseline uppercase font-semibold">
        Latest community posts
      </h3>
      <div className="flex gap-8 flex-wrap">
        {blogTexts.map((blog, index) => {
          return (
            <div
              className="desktop:min-w-[250px] mb-10 flex-1 flex flex-col gap-4"
              key={index}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-square object-cover object-center"
                loading="lazy"
              />
              <div className="p-6 flex flex-col gap-2 text-lg h-fit">
                <h5 className="uppercase text-gray-400 font-semibold tracking-widest">
                  {blog.category}
                </h5>
                <h4 className="text-lg font-semibold mt-4">{blog.title}</h4>
                <p className="max-h-fit text-base">{blog.text}</p>
                <Link to="./NotFound">
                  <p className="text-yellow-600 font-bold">Read More</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
