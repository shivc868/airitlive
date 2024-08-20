import React from "react";
import TestimoniaCard from "./TestimoniaCard";
import Marquee from "react-fast-marquee";
import { testimonialData } from "../common/Helper";

const Testimonial = () => {
  return (
    <section className="py-9 md:py-14 ">
      <h3 className="section-heading text-center">
        What our Clients say about us!
      </h3>
      <Marquee direction="left" speed={90} pauseOnHover={true} gradient={false}>
        <div className="flex h-auto mt-7 sm:mt-9 md:mt-12 lg:mt-14 xl:mt-16">
          {testimonialData.map((testimonial) => (
            <TestimoniaCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonial;
