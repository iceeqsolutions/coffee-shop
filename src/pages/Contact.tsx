import contactUs from "../assets/images/contactUs.jpg";
import contactText from "../assets/texts/contactTexts";
import FeedbackForm from "../components/FeedbackForm";

const Contact: React.FC = () => {
  return (
    <>
      <div className="mt-48 flex flex-col justify-center items-center">
        <div className="banner relative">
          <div className="absolute top-6 left-20">
            <h2 className="text-8xl">We're here</h2>
            <h3 className="pt-12 text-5xl">
              ...and we'd love to hear from you
            </h3>
          </div>
          <img
            src={contactUs}
            alt="Contact banner"
            className="w-full bg-contain"
          />
        </div>
        <div className="mt-10 flex flex-col gap-2 p-2">
          <section className="px-16 py-6 flex flex-col gap-12 w-full laptop:px-4">
            <div className="flex gap-8 tablet:flex-col">
              {contactText.map((item) => (
                <div className="flex flex-col gap-2 flex-1" key={item.header}>
                  <h3 className="text-lg uppercase font-semibold flex gap-1 items-center">
                    {item.header}
                  </h3>
                  <p>{item.text}</p>
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
          </section>
        </div>
      </div>
      <FeedbackForm />
    </>
  );
};

export default Contact;
