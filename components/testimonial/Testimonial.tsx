import React from "react";
import TestimoniaCard from "./TestimoniaCard";
import Marquee from "react-fast-marquee";
import { testimonialData } from "../common/Helper";

const Testimonial = () => {
  return (
    <section className="py-14 md:py-16 lg:py-24 ">
      <h3 className="section-heading text-center">
        What our Clients say about us!
      </h3>
      <Marquee direction="left" speed={90} pauseOnHover={true} gradient={false}>
        <div className="flex h-auto mt-7 sm:mt-9 md:mt-12 lg:mt-16">
          {testimonialData.map((testimonial) => (
            <TestimoniaCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonial;
