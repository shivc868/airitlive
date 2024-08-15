import React from "react";
import TestimoniaCard from "./TestimoniaCard";
import Marquee from "react-fast-marquee";

const testimonialData = [
  {
    id: 1,
    name: "Suzy Ryder",
    role: "Chief Digital Officer",
    company: "OMD UK",
    image: "/img/profile.png",
    feedback:
      "Airit provides a viable path toward a cleaner, greener digital media ecosystem. OMD UK is proud to be an anchor partner for this initiative, bringing more awareness and real solutions to the entire digital media ecosystem.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Marketing Director",
    company: "ABC Corp",
    image: "/img/profile.png",
    feedback:
      "Airit has transformed the way we approach digital media. Their commitment to sustainability is commendable.",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Product Manager",
    company: "XYZ Ltd",
    image: "/img/profile.png",
    feedback:
      "We are thrilled with the impact Airit has had on our digital strategy. The results speak for themselves.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Head of Operations",
    company: "Tech Innovators",
    image: "/img/profile.png",
    feedback:
      "Airit's approach to sustainability in digital media is both innovative and effective. We're proud to be a part of this journey.",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "CEO",
    company: "GreenTech Solutions",
    image: "/img/profile.png",
    feedback:
      "Partnering with Airit has been a game-changer for our business. Their focus on green digital solutions aligns perfectly with our values.",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Creative Minds",
    image: "/img/profile.png",
    feedback:
      "Airit has empowered us to rethink our digital media strategy. Their dedication to sustainability is inspiring.",
  },
  {
    id: 7,
    name: "David Wilson",
    role: "Chief Technology Officer",
    company: "Innovate Corp",
    image: "/img/profile.png",
    feedback:
      "Airit's platform has enabled us to reduce our carbon footprint while maintaining a strong digital presence.",
  },
  {
    id: 8,
    name: "Sophia Lee",
    role: "VP of Marketing",
    company: "FutureMedia",
    image: "/img/profile.png",
    feedback:
      "Airit's commitment to a greener digital ecosystem is unmatched. We're excited to be a part of this movement.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-9 md:py-14 lg:py-20 xl:py-24">
      <h3 className="section-heading text-center">
        What our Clients say about us!
      </h3>
      <Marquee
        direction="right"
        speed={50}
        pauseOnHover={true}
        gradient={false}
      >
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
