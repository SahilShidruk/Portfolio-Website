import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";

import { projects, techStack } from "./data";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="flex min-h-[55vh] flex-col items-center justify-center px-4 text-center"
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

        <h1 className="text-4xl font-bold sm:text-5xl">
          Sahil Shidruk
        </h1>

        <p className="px-2 pt-3 text-xl sm:text-2xl">
          I am Sahil Shidruk from Maharashtra, India.
        </p>

        <div className="flex flex-wrap justify-center gap-5 pt-5">
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
        className="mx-auto flex max-w-3xl flex-col px-5 py-20 sm:px-6"
      >
        <h2 className="text-3xl font-semibold">
          Tech Stack & Tools
        </h2>

        <p className="pt-3 text-lg">
          Technologies and tools I use to build projects and explore how
          software works.
        </p>

        <div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            <h3 className="text-lg font-bold">
              Languages
            </h3>

            <p className="pt-3 leading-7">
              {techStack.languages.join(", ")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Development
            </h3>

            <p className="pt-3 leading-7">
              {techStack.development.join(", ")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Linux & Systems
            </h3>

            <p className="pt-3 leading-7">
              {techStack.linux.join(", ")}
            </p>
          </div>
        </div>

        <div className="pt-10">
          <h3 className="text-lg font-bold">
            Currently Learning
          </h3>

          <p className="pt-3 leading-7">
            {techStack.learning.join(", ")}
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto flex max-w-3xl flex-col px-5 py-20 sm:px-6"
      >
        <h2 className="text-3xl font-semibold">
          Projects I Built
        </h2>

        <p className="pt-2 text-lg">
          Some projects and applications I have built.
        </p>

        <div className="space-y-8 pt-10">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-lg font-semibold">
                    {project.name}
                  </span>

                  <div className="flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:underline"
                      >
                        Live
                        <OpenInNewIcon sx={{ fontSize: 14 }} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:underline"
                      >
                        GitHub
                        <GitHubIcon sx={{ fontSize: 14 }} />
                      </a>
                    )}
                  </div>
                </div>

                <span className="text-sm">
                  {project.stack}
                </span>
              </div>

              <p className="pt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}