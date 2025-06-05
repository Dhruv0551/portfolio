import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Main() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <main className="bg-gradient-to-br from-gray-100 to-white min-h-screen text-gray-900 font-sans px-4 py-10 sm:px-10">
      <section className="max-w-5xl mx-auto space-y-10">
        <motion.header
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700">
            Kapure Dhruv
          </h1>
          <p className="text-xl mt-2">Aspiring Full Stack Developer</p>
          <p className="text-gray-600">Ahmedabad, India</p>
        </motion.header>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-white p-6 shadow-xl rounded-2xl border"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            About Me
          </h2>
          <p>
            I'm a 3rd-year BSc (IT) student at GLS University with a solid
            foundation in programming, data structures, and full-stack
            development. Passionate about real-world applications and always
            eager to learn.
          </p>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="bg-white p-6 shadow-xl rounded-2xl border"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Programming:</strong> C++, Java, Node.js, Express.js
              </li>
              <li>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, React,
                Tailwind CSS
              </li>
              <li>
                <strong>Backend & DB:</strong> MySQL, PL/SQL
              </li>
            </ul>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code
              </li>
              <li>
                <strong>Other:</strong> Data Structures, Algorithms, OOP
              </li>
              <li>
                <strong>Libraries:</strong> jQuery, XML
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="bg-white p-6 shadow-xl rounded-2xl border"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Projects
          </h2>
          <div className="bg-gray-50 p-4 rounded-xl hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold">Netflix Clone</h3>
            <p className="text-sm text-gray-600">
              Tech Stack: React.js, Tailwind CSS
            </p>
            <p className="mt-2">
              A responsive replica of Netflix's UI using modern frontend
              technologies.
            </p>
            <div className="mt-3 flex gap-6">
              <a
                href="https://github.com/Dhruv0551/netflix-clone"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://netfix-clone-phi.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-white p-6 shadow-xl rounded-2xl border"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            Education
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>BSc IT:</strong> GLS University (2023–2026)
            </li>
            <li>
              <strong>HSC:</strong> Shree Narayana School – 66%
            </li>
            <li>
              <strong>SSC:</strong> Don Bosco School – 72%
            </li>
          </ul>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="bg-white p-6 shadow-xl rounded-2xl border"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            Career Objective
          </h2>
          <p>
            Eager to contribute to real-world software projects. I'm looking for
            an internship or entry-level role to apply my programming and web
            development skills in a practical environment.
          </p>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="bg-white p-6 shadow-xl rounded-2xl border"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            Contact
          </h2>
          <p>
            📧{" "}
            <a
              href="mailto:dhruvkapure3@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              dhruvkapure3@gmail.com
            </a>
          </p>
          <p>📱 +91 9328403727</p>
          <div className="mt-4 flex gap-6 text-3xl">
            <a
              href="https://github.com/Dhruv0551"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-kapure"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.section>
      </section>
    </main>
  );
}
