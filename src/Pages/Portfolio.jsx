import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaLightbulb,
  FaMoon,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.jpg";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-6 transition-colors duration-300 font-serif ${
        darkMode ? "bg-black text-white" : "bg-white text-black font-serif"
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="absolute top-6 right-6">
        <FaMoon
          onClick={() => setDarkMode(!darkMode)}
          className={`cursor-pointer text-3xl transition-colors duration-300 ${
            darkMode ? "text-orange-500" : "text-gray-500"
          }`}
        />
      </div>

      {/* Header Section */}
      <header className="text-center mt-10">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={mypic}
            alt="Sabee'a Jeedorh"
            className="w-50 h-50 rounded-full border-4 border-orange-500"
          />
          <motion.h1 className="text-4xl font-bold text-red-500 mt-4 ">
            Hello, I'm{" "}
            <span className="text-orange-400 cursor-pointer hover:text-red-500">
              Sabia
            </span>
          </motion.h1>
          <motion.p
            className="text-lg mt-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Front-End Developer | React & Tailwind Enthusiast
          </motion.p>

          {/* {`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-red-700"}`} */}
        </motion.div>
      </header>

      {/* About Me Section */}
      <section className="mt-10 w-full max-w-4xl">
        <motion.h2
          className="text-2xl font-semibold border-b-4 border-orange-500 pb-2 text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          I am a passionate front-end developer with experience in building
          interactive and user-friendly web applications. My focus is on
          creating efficient and scalable web solutions using modern
          technologies like React and Tailwind CSS.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="mt-10 w-full max-w-4xl">
        <motion.h2
          className="text-2xl font-semibold border-b-4 border-orange-500 pb-2 text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-red-700"
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">
              Todo Web App (React, CSS)
            </h3>
            <p className="mt-2 text-white">
              Developed a Todo app with CRUD operations, pagination, and
              search/filter functionality. Integrated Todo API for dynamic data
              handling and built a responsive UI with Tailwind CSS. Implemented
              error handling and custom 404 page for improved UX. Focused on
              accessibility and mobile responsiveness. <br />
              <ul className="font-bold mt-4">
                <li>
                  Skills Learned: React state management, conditional rendering,
                  CRUD functionality.
                </li>
              </ul>
            </p>
            <a
              href="sabeeastodoapp.netlify.app"
              className="text-orange-500 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </motion.div>
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-red-700"
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">
              HTML/CSS Website (Static)
            </h3>
            <p className="mt-2 text-white">
              Built a responsive, static website using HTML5 and CSS3. Focused
              on clean code, user-friendly design, and mobile responsiveness.
              Implemented modern CSS techniques like flexbox and grid for layout
              design.
            </p>
            <a
              href="assignment-sabeea.netlify.app"
              className="text-orange-500 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </motion.div>
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-red-700"
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">
              Wakf website Clone (partial)
            </h3>
            <p className="mt-2 text-white">
              Initiated the recreation of the Wakf website to enhance
              proficiency in HTML, CSS, and JavaScript, focusing on responsive
              design and user interface replication.{" "}
            </p>
            <br />
            <h2 className="font-bold mt-3">
              {" "}
              Technologies Used: HTML5, CSS3, JavaScript, React.js, Tailwind
              CSS.{" "}
            </h2>
            {/* <h2 className="font-bold mt-4">   Key Features</h2>
              Implemented: Developed a responsive navigation bar and
              implemented dynamic content loading */}

            <a
              href="wakf-clone.netlify.app"
              className="text-orange-500 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="mt-10 w-full max-w-4xl">
        <h2 className="text-xl text-orange-500 font-bold">Checkout my Cv</h2>

        <motion.h2
          className="text-2xl font-semibold border-b-4 border-orange-500 pb-2 text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          {/* Download My CV */}
        </motion.h2>

        <motion.a
          href="https://sabias-cv.netlify.app/"
          download
          className="inline-block py-2 px-6 bg-orange-500 text-white rounded-md mt-4 hover:bg-orange-600 transition duration-300 "
        >
          My CV
        </motion.a>
      </section>

      {/* Contact Section */}
      <section className="mt-10 w-full max-w-4xl">
        <motion.h2
          className="text-2xl font-semibold border-b-4 border-orange-500 pb-2 text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          Contact
        </motion.h2>
        <div className="flex space-x-4 mt-4">
          <motion.a
            href="https://github.com/SabeeJeedorh"
            className={`text-orange-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sabee-a-jeedorh-689141315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={`text-orange-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            className={`text-orange-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="mailto:sabeeajeedorh@gmail.com"
            className={`text-orange-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="+2347031023432"
            className={`text-orange-500 hover:text-white text-3xl transition duration-300 transform hover:scale-110 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.2 }}
          >
            <FaPhone />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
