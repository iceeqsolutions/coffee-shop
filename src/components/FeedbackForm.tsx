import { Link } from "react-router-dom";

const FeedbackForm = () => {
  return (
    <>
      <form className="flex justify-center w-full">
        <div className="m-20 p-10 flex justify-center bg-natural-50 rounded-3xl shadow-2xl">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl/7 font-semibold text-gray-900">Feedback</h2>
            <p className="mt-1 text-md/6 text-gray-600">
              Share your thoughts, concerns and suggestions on how we can
              improve. You can do so anonymously or include your email address
              for a guaranteed response.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-lg/6 font-medium text-gray-900"
                >
                  Email (optional)
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="janesmith@jane.com"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="feedback"
                  className="block text-lg/6 font-medium text-gray-900"
                >
                  Comments, concerns and suggestions
                </label>
                <div className="mt-2">
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows={5}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <Link to="../">
                  <button
                    type="button"
                    className="rounded-xl bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-xl ring-2 ring-inset ring-yellow-500"
                  >
                    Send Feedback
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
