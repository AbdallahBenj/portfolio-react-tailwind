import { useState } from "react";

import useScroll from "../hooks/useScroll";

const ContactForm = () => {
  const visibleSections = useScroll(["contact"]);
  const isSectionVisible = visibleSections["contact"];

  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetFormData = () => {
    SetFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Data:", formData);
    resetFormData();
  };

  // const { name, email, message } = formData;

  return (
    <div
      className="form-container max-w-xl m-auto
    transition-colors duration-500"
    >
      <form
        onSubmit={handleSubmit}
        className="form
      flex flex-col justify-center space-y-6
      transition-colors duration-500"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          className={`w-full
            py-2 px-3 rounded
            ring-2 ring-gray-500
            outline-2 outline-transparent
            focus-visible:outline-sky-500
            bg-gray-200 dark:bg-gray-800
            placeholder:text-gray-500
            text-gray-900 dark:text-gray-100
            transition-all duration-700 delay-200 ease-out
            motion-reduce:transition-none
            motion-reduce:transform-none

            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
            }`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleData}
          placeholder="Name*"
          required
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          className={` w-full
            py-2 px-3 rounded
            ring-2 ring-gray-500
            outline-2 outline-transparent
            focus-visible:outline-sky-500  
            bg-gray-200 dark:bg-gray-800
            placeholder:text-gray-500
            text-gray-900 dark:text-gray-100
            transition-all duration-700 delay-350 ease-out
            motion-reduce:transition-none
            motion-reduce:transform-none 
            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
            }`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleData}
          placeholder="Email*"
          required
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className={`w-full
            py-2 px-3 rounded
            ring-2 ring-gray-500
            outline-2 outline-transparent
            focus-visible:outline-sky-500
            bg-gray-200 dark:bg-gray-800
            placeholder:text-gray-500
            text-gray-900 dark:text-gray-100
            transition-all duration-700 delay-500 ease-out
            motion-reduce:transition-none
            motion-reduce:transform-none 
            ${
              isSectionVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 md:translate-y-8 scale-95 opacity-0"
            }`}
          name="message"
          value={formData.message}
          onChange={handleData}
          placeholder="Message*"
          required
        />

        <button
          type="submit"
          className="font-heading
          cursor-pointer
          rounded p-2
          font-semibold text-lg
          text-gray-50 hover:text-gray-100
          bg-sky-500 hover:bg-sky-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
