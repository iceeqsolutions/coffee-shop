import ApiConnection from "../modules/ApiConnection";

const Featured = () => {
  const apiEndpoint = "https://fake-coffee-api.vercel.app/api";
  return (
    <>
      <section className="flex flex-col items-center gap-8 w-full">
        <h3 className="px-6 pt-12 mt-10 text-yellow-950 text-3xl self-baseline uppercase font-semibold">
          Currently On Sale
        </h3>
        <div className="flex flex-col gap-8 justify-center w-full">
          <ApiConnection apiEndpoint={apiEndpoint} numberOfItems={3} />
        </div>
      </section>
    </>
  );
};

export default Featured;
