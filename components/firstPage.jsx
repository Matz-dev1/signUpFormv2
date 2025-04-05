import { useState, useEffect } from "react";
import ButtonNext from "./buttonNext";

function FirstPage({ onNext, formValues, setFormValues, title }) {
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0 && isSubmit) {
      onNext();
    }
  }, [errorMessage, isSubmit]);

  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const numRegex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3}$/;
    if (!values.name) {
      errors.name = "Please provide a name.";
    }
    if (!values.email) {
      errors.email = "Please provide an email.";
    } else if (!regex.test(values.email)) {
      errors.email = "Your email is invalid, try again.";
    }
    if (!values.phoneNum) {
      errors.phoneNum = "Please provide a number.";
    } else if (!numRegex.test(values.phoneNum)) {
      errors.phoneNum =
        "Invalid number, please provide a prefix followed by 9 digits.";
    }
    return errors;
  };

  return (
    <div className="gap-12 flex flex-col h-full ">
      <div>
        <h2 className="text-4xl font-bold text-[#1e126c]">Personal info</h2>
        <p className="text-gray-400">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form
        className="flex flex-col gap-4 justify-between h-full"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 text-[14px]">
            <label
              className="block text-[#2b1d8a] font-bold text-[14px]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              className={`border-2 border-gray-300 focus:border-blue-700 focus:outline-none w-full h-10 pl-2 rounded-sm ${
                errorMessage.name ? "border-red-900" : ""
              }`}
              onChange={handleChange}
              value={formValues.name}
            />
            {errorMessage.name && (
              <span className="text-red-900 font-bold">
                {errorMessage.name}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 text-[14px]">
            <label
              className="block text-[#2b1d8a] font-bold text-[14px] "
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. text@gmail.com"
              className={`border-2 border-gray-300 focus:border-blue-700 focus:outline-none w-full h-10 pl-2 rounded-sm ${
                errorMessage.email ? "border-red-900" : ""
              }`}
              onChange={handleChange}
              value={formValues.email}
            />
            {errorMessage.email && (
              <span className="text-red-900 font-bold">
                {errorMessage.email}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1 text-[14px]">
            <label
              className="block text-[#2b1d8a] font-bold text-[14px]"
              htmlFor="phoneNum"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNum"
              id="phoneNum"
              placeholder="e.g. +1 234 567 890"
              className={`border-2 border-gray-300 focus:border-blue-700 focus:outline-none w-full h-10 pl-2 rounded-sm ${
                errorMessage.phoneNum ? "border-red-900" : ""
              }`}
              onChange={handleChange}
              value={formValues.phoneNum}
            />
            {errorMessage.phoneNum && (
              <span className="text-red-900 font-bold">
                {errorMessage.phoneNum}
              </span>
            )}
          </div>
        </div>
        <ButtonNext title={title} />
      </form>
    </div>
  );
}
export default FirstPage;
