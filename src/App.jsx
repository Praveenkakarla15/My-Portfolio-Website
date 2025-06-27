// Initial Portfolio Website Structure with React, Vite, TailwindCSS
import { useEffect, useState } from "react";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiGithubpages,
} from "react-icons/si";

export default function App() {
  const [nameIndex, setNameIndex] = useState(0);
  const names = ["Tech Enthusiast", "Web Developer", "Nature Lover"];
  const bgImages = ["url('/bg1.jpg')", "url('/bg2.jpg')", "url('/bg3.jpg')"];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 2000);
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => {
      clearInterval(nameInterval);
      clearInterval(bgInterval);
    };
  }, []);

  return (
    <div className="text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-70 p-4 flex justify-center gap-8 z-10">
        {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="hover:text-yellow-400"
          >
            {section}
          </a>
        ))}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: bgImages[bgIndex],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl text-amber-200 font-bold flex items-center">
          Hi I am Praveen Kakarla <span className="ml-2">👋</span>
        </h1>
        <p className="mt-4 text-amber-300 text-2xl">{names[nameIndex]}</p>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white flex justify-center items-center">
          <img
            src="/about-image.jpg"
            alt="About"
            className="max-h-[80%] rounded-xl"
          />
        </div>
        <div className="bg-white text-blue-900 flex flex-col justify-center p-8 gap-6">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            "I am Praveen Kakarla, a passionate Web Developer and Tech
            Enthusiast with a keen interest in building modern, responsive, and
            efficient websites. <br />
            <br />
            <p>
              I have hands-on experience with cutting-edge technologies like
              ReactJS, TailwindCSS, and version control with Git. I enjoy
              transforming ideas into functional, visually appealing web
              applications.
            </p>{" "}
            <br />
            <p>
              From crafting clean interfaces to deploying on platforms like
              Netlify and Vercel, I believe in delivering quality from start to
              finish. I am always eager to learn, adapt, and contribute to
              innovative projects.
              <br />
              <br />
            </p>{" "}
            Even though I completed my B.Tech with Mechanical Engineering, I
            always wanted to learn Web development and learn new technologies."
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              href="#contact"
              className="bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500"
            >
              Let's Talk
            </a>
            <a
              href="YOUR_RESUME_LINK"
              className="bg-purple-400 px-4 py-2 rounded-xl hover:bg-purple-500"
              target="_blank"
            >
              My Resume
            </a>
            <a
              href="https://github.com/Praveenkakarla15"
              className="bg-green-300 px-4 py-2 rounded-xl hover:bg-green-400"
              target="_blank"
            >
              <FaGithub className="inline" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kakarla-622675371/"
              className="bg-blue-400 px-4 py-2 rounded-xl hover:bg-blue-500"
              target="_blank"
            >
              <FaLinkedin className="inline" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-900 p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Tech Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl mb-4">Version Control</h3>
            <div className="flex flex-col items-center gap-2 text-orange-500">
              <FaGitAlt size={40} /> Git
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl mb-4">Frameworks</h3>
            <div className="flex flex-col items-center gap-2">
              <div className="text-purple-500">
                <SiBootstrap size={40} />
              </div>
              <div className="text-blue-400">
                <SiTailwindcss size={40} />
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl mb-4">Hosting Platforms</h3>
            <div className="flex flex-col items-center gap-2">
              <div className="text-green-400">
                <SiNetlify size={40} />
              </div>
              <div className="text-gray-300">
                <SiGithubpages size={40} />
              </div>
              <div className="text-black bg-white rounded-full p-1">
                <SiVercel size={40} />
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl mb-4">Scripting Languages</h3>
            <div className="flex flex-col items-center gap-2">
              <div className="text-orange-500">
                <FaHtml5 size={40} />
              </div>
              <div className="text-blue-500">
                <FaCss3Alt size={40} />
              </div>
              <div className="text-yellow-400">
                <FaJs size={40} />
              </div>
              <div className="text-cyan-400">
                <FaReact size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-700 text-black p-8 text-center"
      >
        <h2 className="text-3xl text-white font-bold mb-8">Projects</h2>
        <div className="grid gap-6">
          <div className="bg-cyan-100 p-4 rounded-xl">
            <h3 className="text-2xl font-semibold">Expense Tracker</h3>
            <p className="mt-2">
              A simple app to track your expenses efficiently. Note that once
              you login or register, it will open.
            </p>
            <p className="text-sm mt-1">
              Features: Add, Remove Expenses, Total Calculation
            </p>
            <p className="text-sm mt-1">Tech Used: ReactJS, TailwindCSS</p>
            <a
              href="EXPENSE_TRACKER_LINK"
              target="_blank"
              className="mt-4 inline-block bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500"
            >
              See Live
            </a>
          </div>
          <div className="bg-cyan-100 p-4 rounded-xl">
            <h3 className="text-2xl font-semibold">Weather App</h3>
            <p className="mt-2">Check real-time weather based on location.</p>
            <p className="text-sm mt-1">
              Features: Search by city, Real-time Data
            </p>
            <p className="text-sm mt-1">
              Tech Used: ReactJS, OpenWeather API, TailwindCSS
            </p>
            <a
              href="WEATHER_APP_LINK"
              target="_blank"
              className="mt-4 inline-block bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500"
            >
              See Live
            </a>
          </div>
          <div className="bg-cyan-100 p-4 rounded-xl">
            <h3 className="text-2xl font-semibold">CoolKart E-Commerce</h3>
            <p className="mt-2">Fully functional e-commerce website.</p>
            <p className="text-sm mt-1">
              Features: Product Listing, Cart, Wishlist , User Authentication.
            </p>
            <p className="text-sm mt-1">Tech Used: ReactJS, TailwindCSS</p>
            <a
              href="COOLKART_LINK"
              target="_blank"
              className="mt-4 inline-block bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500"
            >
              See Live
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-900 p-8 text-center flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p>Email: praveenkakarla62@gmail.com</p>
        <p>Address: Andhra Pradesh , Tirupati , India</p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/Praveenkakarla15"
            target="_blank"
            className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800"
          >
            <FaGithub className="inline" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-kakarla-622675371/"
            target="_blank"
            className="bg-blue-700 px-4 py-2 rounded-xl hover:bg-blue-800"
          >
            <FaLinkedin className="inline" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-black text-gray-400">
        Made with <FaHeart className="inline text-red-500" /> by Praveen &copy;
        2025
      </footer>
    </div>
  );
}
