import contactText from "../assets/texts/contactTexts";
import FeedbackForm from "../components/FeedbackForm";

const Contact: React.FC = () => {
  return (
    <>
      <div className="mt-48 desktop:mt-0 flex flex-col justify-center items-center">
        <div className="w-full h-80 bg-cover bg-right bg-no-repeat bg-Contact relative">
          <div className="absolute top-10 left-20 text-white italic font-charm">
            <h2 className="text-8xl">We're here</h2>
            <h3 className="pt-4 text-5xl">...and we'd love to hear from you</h3>
          </div>
        </div>
        <div className="w-full mt-10 flex gap-2 p-2 justify-center">
          <div className="flex gap-8 flex-wrap justify-center">
            {contactText.map((item) => (
              <div className="flex flex-col gap-2 w-[400px]" key={item.header}>
                <h3 className="text-lg uppercase font-semibold flex gap-1 items-center">
                  {item.header}
                </h3>
                <p className="min-h-20">{item.text}</p>
                <img
                  className="object-contain width-full"
                  src={item.image}
                  alt="Coffee shop"
                />
                <h2 className="p-2 text-2xl">
                  {item.header === "Visit Us"
                    ? "Our address: "
                    : item.header === "Call Us"
                    ? "Our Phone: "
                    : "Our Email: "}
                  <span className="text-yellow-900 font-bold text-xl">
                    {item.contact}
                  </span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FeedbackForm />
    </>
  );
};

export default Contact;
