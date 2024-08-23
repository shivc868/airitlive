"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const AnimBox = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 122;

  useEffect(() => {
    // Preload images and ensure they are fully loaded
    const loadImages = async (): Promise<HTMLImageElement[]> => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/new/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`; // Adjust path and naming convention as needed
        img.style.width = "100%";
        img.style.height = "100%";
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(loadedImages); // Set images only after all are loaded
          }
        };

        img.onerror = () => {
          console.error(`Image failed to load: ${img.src}`);
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(loadedImages); // Set images even if some failed to load
          }
        };

        loadedImages.push(img);
      }
      return loadedImages;
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === frameCount) {
      // Set up canvas dimensions after images are loaded
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          // Render the first frame immediately
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(
            images[0], // First frame
            0,
            0,
            canvas.width,
            canvas.height
          );

          const render = (index: number) => {
            if (images.length > 0 && images[index] && images[index].complete) {
              context.clearRect(0, 0, canvas.width, canvas.height);
              context.drawImage(
                images[index],
                0,
                0,
                canvas.width,
                canvas.height
              );
            }
          };

          // GSAP ScrollTrigger
          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                markers: false,

                onUpdate: (self) => {
                  const index = Math.floor(self.progress * (frameCount - 1));
                  render(index);
                },
              },
            }
          );
        }
      }
    }
  }, [images]);

  const [randomNumberLeft, setRandomNumberLeft] = useState<number>(0);
  const [randomNumberRight, setRandomNumberRight] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = parseFloat(Math.random().toFixed(2));
      setRandomNumberLeft(newNumber);
      console.log(newNumber);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = parseFloat(Math.random().toFixed(2));
      setRandomNumberRight(newNumber);
      console.log(newNumber);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <canvas
        className="fixed top-0 left-0 z-0 opacity-20 w-full h-full"
        ref={canvasRef}
        style={{ display: "block" }}
      />
      <motion.div
        style={{
          top: 100 * randomNumberLeft + "%",
          left: 100 * randomNumberLeft + "%",
          rotate: 360 * randomNumberLeft,
          scale: 3 * randomNumberLeft,
          opacity: 0.24 * randomNumberLeft,
        }}
        className="rounded-full transition-all opacity-[0.24] duration-[2s] ease-linear fixed w-[45vw] h-[56vh] blur-[40px]"
      >
        <img
          src="/img/moving-left.png"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{
          top: 100 * randomNumberRight + "%",
          left: 100 * randomNumberRight + "%",
          rotate: 360 * randomNumberRight,
          scale: 3 * randomNumberRight,
          opacity: 0.24 * randomNumberRight,
        }}
        className="rounded-full transition-all opacity-[0.24] duration-[2s] ease-linear fixed w-[45vw] h-[56vh] blur-[40px]"
      >
        <img
          src="/img/moving-right.png"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </>
  );
};

export default AnimBox;
