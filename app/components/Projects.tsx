import React from "react";
import Image from "next/image";

interface Link {
    title: string;
    link: string;
}

const projects = [
  {
    title: "GraphQL Powered Blog: fullstack.dev",
    url: "https://graphcms-blog-one-black.vercel.app/",
    technologies: ["React", "Next JS", "TypeScript", "GraphQL", "Tailwind CSS"],
    image: "/fullstackdev.png",
    links: [] as Link[],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Projects = () => {
  const exp = projects.map((e, index) => (
    <li className="mb-12" key={index}>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-10 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <Image
          src={e.image}
          alt="Version 1 of Portfolio"
          width={500}
          height={500}
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-3 sm:translate-y-1"
        ></Image>
        <div className="z-10 sm:col-span-7 sm:order-2">
          <h3 className="font-medium leading-tight">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 group/link text-base tracking-wide"
                href={e.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {e.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-5 w-5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <p className="mt-2 text-sm leading-normal text-slate-300">
              {e.description}
            </p>
            {e.links.length > 0 ? (
              <ul className="mt-2 flex flex-wrap">
                {e.links.map((item, index) => (
                  <li className="mr-4 mb-1" key={index}>
                    <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-blue-300 focus-visible:text-blue-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}

            <ul className="mt-2 flex flex-wrap">
              {e.technologies.map((item, index) => (
                <li className="mr-1.5 mt-2" key={index}>
                  <div className="flex items-center rounded-full bg-blue-400/20 px-3.5 py-1.5 text-blue-300 leading-5 text-xs font-medium">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </h3>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <div className="sticky top-0 z-20 -mx-6 mb-4 text-lg w-screen bg-background/75  px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm uppercase font-bold tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <ol className="group/list">{exp}</ol>
    </div>
  );
};

export default Projects;
