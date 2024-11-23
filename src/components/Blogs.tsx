import blogTexts from "../assets/texts/blogTexts.tsx";

const Blogs = () => {
  return (
    <section className="flex flex-col gap-8">
      <h3 className="self-baseline uppercase font-semibold">
        Latest community posts
      </h3>
      <div className="flex gap-8 flex-wrap laptop:flex-col">
        {blogTexts.map((blog, index) => {
          return (
            <div className="flex-1 flex flex-col gap-4" key={index}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-square object-cover object-center"
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h5 className="uppercase text-gray-400 font-semibold tracking-widest">
                  {blog.category}
                </h5>
                <h4 className="text-xl font-semibold mt-4">{blog.title}</h4>
                <p>{blog.text}</p>
                <a href="#">Read More</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
