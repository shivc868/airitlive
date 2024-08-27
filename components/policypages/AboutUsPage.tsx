import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-xl text-center text-[#4A4A4A] mb-12"
      >
        At AirItLive, we specialize in transforming digital content into thriving revenue streams. As a premier ad monetization partner and ad tech agency, we’re here to solve the unique challenges faced by publishers in today’s dynamic digital landscape. Our mission is to empower publishers to unlock the full potential of their platforms and channels, driving growth and maximizing ad revenue across OTT, CTV, DOOH, websites, apps, and games.
      </motion.p>

      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-left text-[#2D293E] mb-8"
        >
          Who We Are
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          {/* Placeholder for Team Image */}
          <div className="w-1/3">
            <Image
              src="/path-to-team-placeholder.jpg"
              alt="Our Team"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/3 text-lg text-[#4A4A4A]">
            Founded with a passion for innovation and a commitment to excellence, AirItLive is dedicated to helping publishers navigate the complexities of ad monetization. We understand that in a fast-evolving digital environment, publishers need more than just technology – they need a partner who understands their specific needs and provides tailored solutions. Our team comprises seasoned experts in digital advertising, ad tech, and media monetization, all working towards one goal: enhancing your ad revenue while simplifying the process.
          </div>
        </motion.div>
      </section>

      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-left text-[#2D293E] mb-8"
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">OTT & CTV Monetization</h3>
            <p className="text-lg text-[#4A4A4A]">
              Leverage the power of over-the-top and connected TV platforms to reach a wider audience and increase ad revenue.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">DOOH Advertising Solutions</h3>
            <p className="text-lg text-[#4A4A4A]">
              Capitalize on digital out-of-home advertising with strategies that drive visibility and engagement.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">Website and App Monetization</h3>
            <p className="text-lg text-[#4A4A4A]">
              Maximize your digital presence with expertly managed ad placements and strategies across websites and apps.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">Game Monetization</h3>
            <p className="text-lg text-[#4A4A4A]">
              Turn your gaming content into a profitable venture with tailored ad solutions that don’t disrupt the user experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-left text-[#2D293E] mb-8"
        >
          Our Unique Advantages
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">Higher eCPM</h3>
            <p className="text-lg text-[#4A4A4A]">
              Boost your earnings with strategies designed to increase your effective cost per mille (eCPM).
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">Premium Demand Partners</h3>
            <p className="text-lg text-[#4A4A4A]">
              Access a network of top-tier demand partners for premium ad placements.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">Brand Safety</h3>
            <p className="text-lg text-[#4A4A4A]">
              Ensure your content is always aligned with brand-safe advertising.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">IVT Protection</h3>
            <p className="text-lg text-[#4A4A4A]">
              Protect your revenue from invalid traffic (IVT) with advanced detection and prevention measures.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">Ad Ops Services</h3>
            <p className="text-lg text-[#4A4A4A]">
              Rely on our expert ad operations services to optimize your ad management.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#2D293E] mb-4">AI Automation</h3>
            <p className="text-lg text-[#4A4A4A]">
              Leverage AI-driven automation to enhance efficiency and maximize ad revenue.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mb-24">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-left text-[#2D293E] mb-8"
        >
          Our Commitment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg text-[#4A4A4A] mb-12"
        >
          We are driven by a commitment to innovation, excellence, and customer satisfaction. At AirItLive, we aim to be more than just a service provider – we strive to be a trusted partner in your monetization journey. By focusing on your goals and understanding your audience, we help you turn challenges into opportunities and ensure your success in the digital world.
        </motion.p>
      </section>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="bg-[#0052CC] text-white text-xl py-4 px-8 rounded-lg shadow-lg"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
