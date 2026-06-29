import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "This is the Contact page.",
};

const ContactPage = () => {
  return (
    <div className="px-6 py-10 sm:py-15 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute overflow-hidden blur-3xl sm:-top-60"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold  text-balance text-gray-800 sm:text-5xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Please take a moment to fill in the form below to contact our team
          directly. Thank you for your cooperation!
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-10 max-w-xl border-2 bg-gray-800 p-7 rounded-2xl shadow-2xl sm:mt-10"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                name="first-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white   placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                name="last-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-white"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-white"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white/5  outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option>NP</option>
                  </select>
                </div>
                <input
                  id="phone-number"
                  type="text"
                  name="phone-number"
                  placeholder="+977"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-sm/6 text-gray-400"
            >
              By selecting this, you agree to our
              <Link
                href="#"
                className="font-semibold whitespace-nowrap text-indigo-400"
              >
                privacy policy
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
