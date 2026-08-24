import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="flex min-h-[55vh] flex-col items-center justify-center"
      >
        <div className="mb-6 h-24 w-24 overflow-hidden rounded-full">
          <Image
            src="/pikachu.png"
            alt="Pikachu"
            width={96}
            height={96}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="text-5xl font-bold">
          Sahil Shidruk
        </h1>

        <p className="pt-3 text-2xl">
          I am Sahil Shidruk from Maharashtra, India.
        </p>

        <div className="flex gap-5 pt-5">
          <a
            href="https://github.com/SahilShidruk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <GitHubIcon sx={{ fontSize: 18 }} />
            Github
          </a>

          <a
            href="mailto:sahilshidruk2005@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <EmailIcon
              sx={{
                fontSize: 18,
                color: "#EA4335",
              }}
            />
            E-Mail
          </a>

          <a
            href="https://www.linkedin.com/in/sahilshidruk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <LinkedInIcon
              sx={{
                fontSize: 18,
                color: "#0A66C2",
              }}
            />
            Linked-In
          </a>
        </div>
      </section>

      <section
        id="tools"
        className="mx-auto flex max-w-3xl flex-col py-20"
      >
        <h2 className="text-3xl font-semibold">
          Tech Stack & Tools
        </h2>
      
        <p className="pt-3 text-lg">
          Technologies and tools I use to build projects and explore how
          software works.
        </p>
      
        <div className="grid grid-cols-3 gap-12 pt-10">
          <div>
            <h3 className="text-lg font-bold">Languages</h3>
            <p className="pt-3 leading-7">
              JavaScript, TypeScript, Python, C++
            </p>
          </div>
      
          <div>
            <h3 className="text-lg font-bold">Development</h3>
            <p className="pt-3 leading-7">
              React, Next.js, Node.js, Express, MongoDB, Redis
            </p>
          </div>
      
          <div>
            <h3 className="text-lg font-bold">Linux & Systems</h3>
            <p className="pt-3 leading-7">
              Arch Linux, Hyprland, Bash, Git, Docker
            </p>
          </div>
        </div>
      
        <div className="pt-10">
          <h3 className="text-lg font-bold">
            Currently Learning
          </h3>
      
          <p className="pt-3 leading-7">
            Currently learning Rust and exploring how software works closer to the hardware.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto flex max-w-3xl flex-col py-20"
      >
        <h2 className="text-3xl font-semibold">
          Projects I Built
        </h2>

        <p className="pt-2 text-lg">
          Some projects and applications I have built.
        </p>

        <div className="pt-10">
          <div className="flex items-center justify-between">
            <a
              href="https://crafters-stats.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-semibold hover:underline"
            >
              Crafters Stats
              <OpenInNewIcon sx={{ fontSize: 16 }} />
            </a>

            <span className="text-sm">
              Next.js / Node.js
            </span>
          </div>

          <p className="pt-2">
            A Minecraft statistics website built with Next.js,
            Express, Redis and MongoDB.
          </p>
        </div>

        <div className="pt-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold hover:underline"
            >
              PyQsHere
              <OpenInNewIcon sx={{ fontSize: 16 }} />
            </a>

            <span className="text-sm">
              Next.js
            </span>
          </div>

          <p className="pt-2">
            A platform for finding and organizing previous year
            question papers for students.
          </p>
        </div>

        <div className="pt-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold hover:underline"
            >
              Discord Bots
              <OpenInNewIcon sx={{ fontSize: 16 }} />
            </a>

            <span className="text-sm">
              Node.js
            </span>
          </div>

          <p className="pt-2">
            Discord bots built with JavaScript and Node.js for
            automation and server utilities.
          </p>
        </div>

        <div className="pt-8">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold hover:underline"
            >
              Minecraft Projects
              <OpenInNewIcon sx={{ fontSize: 16 }} />
            </a>

            <span className="text-sm">
              JavaScript / TypeScript
            </span>
          </div>

          <p className="pt-2">
            Various Minecraft-related projects, tools and server
            development experiments.
          </p>
        </div>
      </section>
    </div>
  );
}