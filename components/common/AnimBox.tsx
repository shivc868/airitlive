import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AnimBox = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".moving-box-right",
      {
        borderRadius: "10% 20% 52% 42%",
        y: 0,
        rotate: 0,
        scale: 1,
      },
      {
        borderRadius: "40% 10% 42% 2%",
        y: 50,
        rotate: -20,
        scale: 0.9,
        scrollTrigger: {
          trigger: "#hero-wrapper",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      ".moving-box-right",
      {
        borderRadius: "40% 10% 42% 2%",
        y: 50,
        rotate: -20,
        scale: 0.9,
      },
      {
        borderRadius: "40% 10% 42% 2%",
        y: -50,
        rotate: 10,
        scale: 1.1,
        scrollTrigger: {
          trigger: "#amplify",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      ".moving-box-right",
      {
        borderRadius: "40% 10% 42% 2%",
        y: -50,
        rotate: 10,
        scale: 1.1,
      },
      {
        borderRadius: "10% 60% 142% 52%",
        y: 200,
        rotate: -20,
        scale: 1.2,
        scrollTrigger: {
          trigger: "#plateforms",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      ".moving-box-right",
      {
        borderRadius: "10% 60% 142% 52%",
        y: 200,
        rotate: -20,
        scale: 1.2,
      },
      {
        borderRadius: "70% 20% 12% 52%",
        y: 0,
        rotate: -40,
        scale: 1,
        scrollTrigger: {
          trigger: "#media-nextwork",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      {/* <div className="moving-box-left z-0 rounded-[10%_20%_22%_42%] rotate-0 translate-y-0 opacity-[0.44] blur-[50px] bg-[#7700bc] w-[46vw] h-[90vh] fixed top-10 left-10"></div> */}
      <div className="moving-box-right z-0 rounded-[10%_20%_52%_42%] rotate-0 translate-y-0 opacity-[0.40] blur-[69px] bg-[#440781] w-[46vw] h-[90vh] fixed top-0 right-10"></div>
    </>
  );
};

export default AnimBox;
