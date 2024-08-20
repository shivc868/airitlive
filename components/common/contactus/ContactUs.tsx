import React from "react";
import ContactForm from "./ContactForm";

import SecondaryButton from "../SecondaryButton";
import { RightArrow } from "../Icons";
import SuccessAction from "@/components/home/SuccessAction";

const ContactUs = () => {
  return (
    <section className="bg-lavender py-9 xl:py-12 px-4">
      <div className="flex justify-between md:flex-row flex-col gap-6 items-center max-w-[1050px] mx-auto">
        <div className="lg:max-w-[558px] space-y-5 md:space-y-10 lg:space-y-14 w-full">
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[48px] font-semibold font-lato lg:leading-[119%]">
            Ready to transform your media ecosystem?
          </h3>
          <SecondaryButton
            className="h-8 md:h-11 text-base md:text-[22px]"
            icon={true}
          >
            Become a partner
            <span className="h-5 w-5 md:w-[26px] md:h-[26px] bg-purple rounded-full flex items-center justify-center">
              <RightArrow />
            </span>
          </SecondaryButton>
        </div>
        <ContactForm />
      </div>{" "}
    </section>
  );
};

export default ContactUs;
