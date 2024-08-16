import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-lavenderIndigo p-5 lg:p-12 lg:max-w-[477px] w-full rounded-[19px] lg:rounded-[29.525px] backdrop-blur-md">
      <h4 className="text-lg font-medium font-lato md:text-2xl mb-6">
        Contact Us
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex gap-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input-style w-full"
            placeholder="First Name*"
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input-style w-full"
            placeholder="Last Name*"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input-style w-full"
            placeholder="Company*"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-style w-full"
            placeholder="Work Email*"
            required
          />
        </div>

        <button
          type="submit"
          className=" rounded-[92.265px] bg-purple text-white text-base font-semibold font-inter px-5 py-2 w-fit transition duration-300 hover:bg-thunder hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
