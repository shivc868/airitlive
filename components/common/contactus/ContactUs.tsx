import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-lavender py-9 xl:py-12 px-4">
      <div className="flex justify-between md:flex-row flex-col gap-5 items-center max-w-[1033px] mx-auto">
        <div className="lg:max-w-[558px] space-y-5 md:space-y-10 lg:space-y-14 w-full">
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[40px] xl:text-[48px] lg:leading-[119%]">
            Ready to transform your media ecosystem?
          </h3>
          <button className="btn-primary">Become a partner </button>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
