import contactUs from "../assets/images/contactUs.jpg";
import visitUs from "../assets/images/visitUs.jpg";
import callUs from "../assets/images/callUs.jpg";
import emailUs from "../assets/images/emailUs.jpg";

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
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg uppercase font-semibold flex gap-1 items-center">
                  Visit us
                </h3>
                <p>
                  Come and meet us in person and share your thoughts - we'll
                  save a seat for you.
                </p>
                <img
                  className="object-contain width-full"
                  src={visitUs}
                  alt="Coffee shop"
                />
              </div>
              <div className="flex flex-col gap-2  flex-1">
                <h3 className="text-lg uppercase font-semibold flex gap-1 items-center">
                  Call us
                </h3>
                <p>
                  If you have any questions or concerns about our products or
                  our service, you're more than welcome to give us a call.
                </p>
                <img
                  className="object-contain width-full"
                  src={callUs}
                  alt="Phone and coffee beans"
                />
              </div>
              <div className="flex flex-col gap-2  flex-1">
                <h3 className="text-lg uppercase font-semibold flex gap-1 items-center">
                  Send us feedback
                </h3>
                <p>
                  We'd love to hear how we can improve our service. Please share
                  your thoughts via email, or send us direct feedback below:
                </p>
                <img
                  className="object-contain width-full"
                  src={emailUs}
                  alt="Coffee shop"
                />
                <input type="textfield" placeholder="Send us your feedback" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
