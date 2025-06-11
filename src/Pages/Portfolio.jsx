import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaChevronUp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import mypic2 from "../assets/mypic2.png";
import todo from "../assets/todo.png";
import wakf from "../assets/wakf.png";
import roots from "../assets/roots.png";

import staticSite from "../assets/static-site.png"; // Added import for static site image

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Skills data
  const skills = [
    { name: "React.js", level: 60 },
    { name: "Next js", level: 60 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Responsive Design", level: 90 },
  ];

  // Handle dark mode
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

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Project data for cleaner code
  const projects = [
    {
      title: "Todo Web Application",
      description:
        "A comprehensive Todo application featuring CRUD operations, pagination, and search/filter functionality. Integrated with Todo API for dynamic data handling.",
      skills:
        "React state management, API integration, conditional rendering, CRUD functionality",
      link: "https://sabeeastodoapp.netlify.app/",
      technologies: ["React", "Tailwind CSS", "RESTful API"],
      image: todo,
    },
    {
      title: "Responsive Static Website",
      description:
        "A responsive, static website built with modern web standards and best practices for performance and accessibility.",
      skills:
        "Clean code architecture, user-friendly design, mobile responsiveness, CSS flexbox and grid",
      link: "https://assignment-sabeea.netlify.app/",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: staticSite, // Using the imported static site image
    },
    {
      title: "Wakf Website Clone",
      description:
        "Recreation of the Wakf website with enhanced user interface and responsive design across all device sizes.",
      skills:
        "UI replication, responsive design patterns, component-based architecture",
      link: "https://wakf-clone.netlify.app/",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      image: wakf,
    },
    {
      title: "RootsnRoutes",
      description:
        "Roots n Routes is a travel web app built with Next.js 15, TypeScript, React 19, and Tailwind CSS, focused on exploring African destinations. It features user authentication (with test user setup), a partially working accommodation flow, and ongoing development on vendor and city pages. The app uses shadcn/ui components, React Context for auth state, and follows a file-based routing structure. Key sections include destinations, experiences, user profiles, a blog, and a vendor portal. Styling is handled with Tailwind and custom UI components, with plans to improve layout and visual consistency.",
      skills:
        "Hnads on project",
      link: "./",
      technologies: ["Nextjs", "Tailwind CSS", "JavaScript"],
      image: roots,
    },
  ];

  // Updated color scheme
  const colors = {
    primary: "teal-600", // Main brand color
    secondary: "indigo-700", // Secondary accent color
    accent: "amber-500", // Accent for highlights
    light: {
      bg: "white",
      secondaryBg: "gray-50",
      text: "gray-800",
      cardBg: "white",
      cardSecondaryBg: "gray-100",
    },
    dark: {
      bg: "gray-900",
      secondaryBg: "gray-800",
      text: "gray-100",
      cardBg: "gray-800",
      cardSecondaryBg: "gray-700",
    },
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode
          ? `bg-gray-800`
          : `bg-${colors.light.bg} text-${colors.light.text}`
      } font-serif`}
    >
      {/* Navigation Bar */}
      <nav
        className={`sticky top-0 z-999 w-full ${
          darkMode ? `bg-gray-800` : `bg-white`
        } shadow-md px-4 md:px-6 py-4`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold font-sanserif border-white transition-transform duration-300 hover:scale-105">
            <span className={`text-${colors.primary}`}>Sabee</span>
            <span className={`${darkMode ? `text-amber-50` : `text-black`}`}>
              {/* darkMode
                  ? `text-red-500`
                  : `text-${colors.light.text} font-serif` */}
              tech
            </span>
          </h2>

          <div className="flex items-center space-x-6 text-relative">
            <a
              href="./"
              className={`hidden md:inline-block hover:text-${colors.primary} transition-colors hover:text-gray-700 
              `}
            >
              Home
            </a>
            <a
              href="#about"
              className={`hidden md:inline-block hover:text-${colors.primary} transition-colors hover:text-gray-700`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`hidden md:inline-block hover:text-${colors.primary} transition-colors  hover:text-gray-700`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`hidden md:inline-block hover:text-${colors.primary} transition-colors  hover:text-gray-700`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hidden md:inline-block hover:text-${colors.primary} transition-colors bg-black text-white px-5 py-1.5 rounded-3xl hover:bg-white hover:text-black shadow-md font-medium transition-transform duration-300 hover:scale-105 hover:border-2`}
            >
              Contact Us
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full focus:outline-none"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <FaMoon className={`text-gray-500 text-xl`} />
              ) : (
                <FaSun className="text-yellow-500 text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className={`w-full py-24 ${
          darkMode
            ? `bg-${colors.secondary}`
            : `bg-gradient-to-r from-${colors.primary} to-${colors.secondary}`
        } text-white`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className=" text-black text-4xl md:text-5xl font-bold mb-4">
              Hello, I'm {""}
              <span className={`${darkMode ? `text-amber-50` : `text-black`}`}>
                Sabia
              </span>
            </h1>

            <p className="text-4xl md:text-3xl mb-6 opacity-90 text-black font-serif font-bold">
              I'm a Front-End Developer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-md border-2 border-${colors.accent} text-black hover:bg-${colors.accent}  hover:bg-black hover:text-white shadow-md font-medium transition-transform duration-300 hover:scale-105`}
              >
                View My Work
              </a>
              <a
                href="https://sabias-cv.netlify.app/"
                className={`px-7 py-3 rounded-md border-2 border-${colors.accent} text-white bg-black hover:bg-${colors.accent}  hover:bg-white hover:text-black shadow-md font-medium transition-transform duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div
                className={`absolute inset-0 rounded-full bg-${colors.accent} opacity-20 transform -rotate-6`}
              ></div>
              <img
                src={mypic2}
                alt="Sabia - Front-end Developer"
                className={`relative z-10 w-full h-full object-cover rounded-full border-2 border-black`}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className={` mt-10 py-12 ${
          darkMode ? `bg-${colors.dark.bg}` : `bg-${colors.light.secondaryBg}`
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className={`text-${colors.primary}`}>About</span> Me
          </h2>
          <div
            className={`p-8 rounded-lg shadow-lg ${
              darkMode
                ? `bg-${colors.dark.cardBg}`
                : `bg-${colors.light.cardBg}`
            }`}
          >
            <p className="text-lg leading-relaxed mb-6">
              I am a passionate front-end developer with experience in building
              interactive and user-friendly web applications. My focus is on
              creating efficient and scalable web solutions using modern
              technologies like React and Tailwind CSS.
            </p>
            <p className="text-lg leading-relaxed">
              With a keen eye for detail and a commitment to writing clean,
              maintainable code, I strive to deliver high quality web
              experiences that meet both user needs and business goals. I'm
              constantly learning and adapting to new technologies to stay at
              the forefront of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${
          darkMode ? `bg-${colors.dark.secondaryBg}` : `bg-${colors.light.bg}`
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className={`text-${colors.primary}`}>My</span> Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${
                  darkMode
                    ? `bg-${colors.dark.cardSecondaryBg}`
                    : `bg-${colors.light.cardSecondaryBg}`
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className={`text-${colors.primary}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r from-${colors.primary} to-${colors.secondary} h-2 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${
          darkMode ? `bg-${colors.dark.bg}` : `bg-${colors.light.secondaryBg}`
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className={`text-${colors.primary}`}>My</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  darkMode
                    ? `bg-${colors.dark.cardBg}`
                    : `bg-${colors.light.cardBg}`
                }`}
              >
                <div className="h-48 overflow-hidden">
                  {/* Project screenshot */}
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 text-${colors.primary}`}
                  >
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm uppercase opacity-75 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-sm rounded-full ${darkMode}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-${colors.secondary} hover:text-${colors.primary} transition-colors`}
                  >
                    View Project <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* collaborative projects */}
     

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${
          darkMode ? `bg-${colors.dark.secondaryBg}` : `bg-${colors.light.bg}`
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className={`text-${colors.primary}`}>Get In</span> Touch
          </h2>
          <div
            className={`p-8 rounded-lg shadow-lg ${
              darkMode
                ? `bg-${colors.dark.cardSecondaryBg}`
                : `bg-${colors.light.cardSecondaryBg}`
            }`}
          >
            <div className="flex flex-col md:flex-row md:space-y-8">
              <div className="md:w-1/2 mb-14 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <p className="mb-6">
                  I'm currently open to freelance opportunities and
                  collaborations. Feel free to reach out if you'd like to work
                  together!
                </p>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <FaEnvelope className={`mr-3 text-${colors.primary}`} />
                    <a
                      href="mailto:sabeeajeedorh@gmail.com"
                      className={`hover:text-${colors.primary} transition-colors`}
                    >
                      sabeeajeedorh@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-6 text-3xl">
                  <a
                    href="https://github.com/SabeeJeedorh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${colors.primary} hover:text-${colors.secondary} transition-colors`}
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabee-a-jeedorh-689141315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${colors.primary} hover:text-${colors.secondary} transition-colors`}
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/a_sabee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${colors.primary} hover:text-${colors.secondary} transition-colors`}
                    aria-label="Twitter Profile"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 ${
          darkMode ? `bg-${colors.dark.bg}` : `bg-${colors.light.secondaryBg}`
        } border-t ${darkMode ? "border-gray-200" : "border-gray-800"}`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p>
            © {new Date().getFullYear()} Sabee
            <span className={`${darkMode ? `text-amber-50` : `text-black`}`}>
              tech
            </span>
            . All rights reserved.
          </p>
          <p className="mt-2 text-sm opacity-75">
            Front-End Developer | React & Tailwind CSS Specialist
          </p>
        </div>
      </footer>
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 p-3 text-#0000 rounded-full shadow-lg 
            ${darkMode ? "bg-white text-black" : "bg-black text-amber-50"}
            
            hover:bg-${colors.secondary} transition-all z-40
            
            `}
          aria-label="Back to Top"
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
