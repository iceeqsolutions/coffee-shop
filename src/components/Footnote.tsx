import icsLogo from "../assets/images/iCeeqSolutionsLogo.png";

const Footnote = () => {
  return (
    <div className="flex justify-end items-center gap-5 fixed bottom-1 right-0 bg-neutral-500 bg-opacity-50 rounded-l-2xl">
      <p className="text-white text-lg italic py-1 pl-5">
        React/TypeScript demo by:
      </p>
      <a href="https://iceeqsolutions.fi" target="_blank">
        <img src={icsLogo} alt="Company logo" className="h-6" />
      </a>
    </div>
  );
};

export default Footnote;
