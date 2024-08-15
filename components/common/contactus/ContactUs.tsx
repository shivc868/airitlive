import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-lavender py-9 xl:py-12 flex justify-between md:flex-row flex-col gap-5 items-center max-w-[1033px] mx-auto px-4">
      <div className="lg:max-w-[558px] space-y-5 xl:space-y-14 w-full">
        <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[40px] xl:text-[48px]">
          Ready to transform your media ecosystem?
        </h3>
        <button className="btn-primary">Become a partner </button>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactUs;
