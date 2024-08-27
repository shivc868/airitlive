import React from 'react';
import { motion } from 'framer-motion';

const LeadershipPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen">
      {/* Background Eclipse Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        }}
      />
      
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url('/path/to/parallax-background.jpg')` }}
        initial={{ y: '-50%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="relative z-10 text-white px-6 py-20 text-center">
        {/* Motion Text Effect */}
        <motion.h1
          className="text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Meet the Visionaries Driving AirItLive Forward
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          At AirItLive, our leadership team comprises seasoned professionals with deep expertise in digital advertising, ad tech, and media monetization. Their combined experience and innovative thinking drive our commitment to excellence and growth, guiding AirItLive in delivering superior ad monetization solutions to our partners worldwide.
        </motion.p>
      </div>

      {/* Executive Team Section */}
      <div className="relative z-10 px-6 py-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            {/* CEO Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <motion.img
                src="/path/to/nithin-appachan.jpg"
                alt="Nithin Appachan"
                className="rounded-full w-32 h-32 mx-auto mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              />
              <h3 className="text-2xl font-bold mb-2">Nithin Appachan</h3>
              <p className="text-blue-600 font-semibold">Chief Executive Officer (CEO)</p>
              <p className="text-gray-700 mt-4">
                Nithin leads AirItLive with a clear vision and a deep understanding of the digital advertising landscape. As CEO, he sets the strategic direction and drives growth initiatives.
              </p>
            </div>

            {/* CRO/COO Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <motion.img
                src="/path/to/arun-aravindakshan.jpg"
                alt="Arun Aravindakshan"
                className="rounded-full w-32 h-32 mx-auto mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
              <h3 className="text-2xl font-bold mb-2">Arun Aravindakshan</h3>
              <p className="text-blue-600 font-semibold">Chief Revenue Officer (CRO) / Chief Operating Officer (COO)</p>
              <p className="text-gray-700 mt-4">
                Arun is responsible for developing and executing sales strategies, managing client relationships, and exploring new revenue opportunities at AirItLive.
              </p>
            </div>

            {/* CTO/CFO Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <motion.img
                src="/path/to/anoop-aravindakshan.jpg"
                alt="Anoop Aravindakshan"
                className="rounded-full w-32 h-32 mx-auto mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.4 }}
              />
              <h3 className="text-2xl font-bold mb-2">Anoop Aravindakshan</h3>
              <p className="text-blue-600 font-semibold">Chief Technology Officer (CTO) / Chief Financial Officer (CFO)</p>
              <p className="text-gray-700 mt-4">
                Anoop drives the development and implementation of advanced ad tech solutions and oversees the financial strategy at AirItLive.
              </p>
            </div>

            {/* CMO Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <motion.img
                src="/path/to/elvin-thomas.jpg"
                alt="Elvin Thomas"
                className="rounded-full w-32 h-32 mx-auto mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.6 }}
              />
              <h3 className="text-2xl font-bold mb-2">Elvin Thomas</h3>
              <p className="text-blue-600 font-semibold">Chief Marketing Officer (CMO)</p>
              <p className="text-gray-700 mt-4">
                Elvin leads AirItLive’s global marketing strategy, focusing on brand development, demand generation, and customer engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="relative z-10 px-6 py-20 text-center bg-gray-50">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        >
          Join Us on Our Journey
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2 }}
        >
          AirItLive is always looking for talented individuals who share our passion for innovation and excellence. If you’re interested in joining our team or learning more about our leadership, please contact us.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-blue-600 text-white text-lg py-4 px-8 rounded-lg shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, delay: 2.2 }}
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
};

export default LeadershipPage;
