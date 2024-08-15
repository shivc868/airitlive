import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-lavender h-screen flex justify-between items-center max-w-[1033px] mx-auto px-4">
      <div>
        <h3 className="">Ready to transform your media ecosystem?</h3>
        <button>Become a partner </button>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactUs;
