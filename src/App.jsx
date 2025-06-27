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
  FaMoneyBillWave,
  FaCloudSun,
  FaShoppingCart,
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

  const bgImages = [
    "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  ];
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
      <nav className="fixed top-0 w-full bg-black bg-opacity-70 p-4 flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 z-10 text-xs sm:text-sm md:text-base">
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
        className="h-screen flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: bgImages[bgIndex],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl text-amber-200 font-bold flex flex-wrap justify-center items-center">
          Hi I am Praveen Kakarla <span className="ml-2">👋</span>
        </h1>
        <p className="mt-4 text-amber-300 text-lg sm:text-xl md:text-2xl">
          {names[nameIndex]}
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2"
      >
        <div className="bg-white flex justify-center items-center p-4">
          <img
            src="https://images.unsplash.com/photo-1729520126776-2235a6baa1f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About"
            className="max-h-[80%] w-full object-contain rounded-xl"
          />
        </div>
        <div className="bg-white text-blue-900 flex flex-col justify-center p-4 sm:p-6 md:p-12 gap-4 md:gap-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            I am Praveen Kakarla, a passionate Web Developer and Tech Enthusiast
            with a keen interest in building modern, responsive, and efficient
            websites.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            I have hands-on experience with technologies like ReactJS,
            TailwindCSS, and version control with Git. I enjoy transforming
            ideas into functional, visually appealing web applications.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            From crafting clean interfaces to deploying on platforms like
            Netlify and Vercel, I believe in delivering quality from start to
            finish. I am always eager to learn, adapt, and contribute to
            innovative projects.
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Even though I completed my B.Tech with Mechanical Engineering, I
            always wanted to learn Web development and new technologies.
          </p>
          <div className="flex gap-2 sm:gap-4 mt-4 flex-wrap">
            <a
              href="#contact"
              className="bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 text-xs sm:text-sm md:text-base"
            >
              Let's Talk
            </a>
            <a
              href="YOUR_RESUME_LINK"
              className="bg-purple-400 px-4 py-2 rounded-xl hover:bg-purple-500 text-xs sm:text-sm md:text-base"
              target="_blank"
            >
              My Resume
            </a>
            <a
              href="https://github.com/Praveenkakarla15"
              className="bg-green-300 px-4 py-2 rounded-xl hover:bg-green-400 text-xs sm:text-sm md:text-base"
              target="_blank"
            >
              <FaGithub className="inline" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kakarla-622675371/"
              className="bg-blue-400 px-4 py-2 rounded-xl hover:bg-blue-500 text-xs sm:text-sm md:text-base"
              target="_blank"
            >
              <FaLinkedin className="inline" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Tech Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg md:text-xl mb-4">Version Control</h3>
            <div className="flex flex-col items-center gap-2 text-orange-500">
              <FaGitAlt size={40} /> Git
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg md:text-xl mb-4">Frameworks</h3>
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
            <h3 className="text-lg md:text-xl mb-4">Hosting Platforms</h3>
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
            <h3 className="text-lg md:text-xl mb-4">Scripting Languages</h3>
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
        className="min-h-screen bg-gray-800 p-4 sm:p-6 md:p-8 text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Projects
        </h2>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {/* Expense Tracker */}
          <div className="bg-gray-700 p-4 rounded-xl">
            <div className="flex justify-center mb-2 text-green-400">
              <FaMoneyBillWave size={40} />
            </div>
            <img
              src="https://images.unsplash.com/photo-1711344397160-b23d5deaa012?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Expense Tracker"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg md:text-xl font-semibold">
              Expense Tracker
            </h3>
            <p className="mt-2 text-sm">
              A simple app to track your expenses efficiently.
            </p>
            <p className="text-xs mt-1">
              Features: Add, Remove Expenses, Total Calculation
            </p>
            <p className="text-xs mt-1">Tech Used: ReactJS, TailwindCSS</p>
            <a
              href="https://expense-tracker-git-main-praveen-ks-projects-7fbabb68.vercel.app"
              target="_blank"
              className="mt-4 inline-block bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 text-sm"
            >
              See Live
            </a>
          </div>

          {/* Weather App */}
          <div className="bg-gray-700 p-4 rounded-xl">
            <div className="flex justify-center mb-2 text-blue-300">
              <FaCloudSun size={40} />
            </div>
            <img
              src="https://images.unsplash.com/photo-1705077031869-51b60754302a?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Weather App"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg md:text-xl font-semibold">Weather App</h3>
            <p className="mt-2 text-sm">
              Check real-time weather based on location.
            </p>
            <p className="text-xs mt-1">
              Features: Search by city, Real-time Data
            </p>
            <p className="text-xs mt-1">
              Tech Used: ReactJS, OpenWeather API, TailwindCSS
            </p>
            <a
              href="https://weather-app-git-main-praveen-ks-projects-7fbabb68.vercel.app"
              target="_blank"
              className="mt-4 inline-block bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 text-sm"
            >
              See Live
            </a>
          </div>

          {/* CoolKart E-Commerce */}
          <div className="bg-gray-700 p-4 rounded-xl">
            <div className="flex justify-center mb-2 text-pink-400">
              <FaShoppingCart size={40} />
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1683936164558-7061805e86d0?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CoolKart E-Commerce"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg md:text-xl font-semibold">
              CoolKart E-Commerce
            </h3>
            <p className="mt-2 text-sm">Fully functional e-commerce website.</p>
            <p className="text-xs mt-1">
              Features: Product Listing, Cart, Authentication
            </p>
            <p className="text-xs mt-1">Tech Used: ReactJS, TailwindCSS</p>
            <a
              href="https://cool-kart-updated-git-main-praveen-ks-projects-7fbabb68.vercel.app"
              target="_blank"
              className="mt-4 inline-block bg-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 text-sm"
            >
              See Live
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 text-center flex flex-col justify-center items-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Contact
        </h2>
        <p className="text-xs sm:text-sm md:text-base">
          Email: praveenkakarla62@gmail.com
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          Address: Andhra Pradesh, Tirupati, India
        </p>
        <div className="flex gap-2 sm:gap-4 mt-4 flex-wrap justify-center">
          <a
            href="https://github.com/Praveenkakarla15"
            target="_blank"
            className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800 text-xs sm:text-sm md:text-base"
          >
            <FaGithub className="inline" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-kakarla-622675371/"
            target="_blank"
            className="bg-blue-700 px-4 py-2 rounded-xl hover:bg-blue-800 text-xs sm:text-sm md:text-base"
          >
            <FaLinkedin className="inline" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-black text-gray-400 text-xs sm:text-sm md:text-base">
        Made with <FaHeart className="inline text-red-500" /> by Praveen &copy;
        2025
      </footer>
    </div>
  );
}
