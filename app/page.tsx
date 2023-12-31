import NavLink from "./components/NavLink";
import SocialMediaLink from "./components/SocialMediaLink";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

export default function Home() {
  return (
    // TODO: fix nav link highlighting via scroll, content description, const extraction, modularize technologies
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-albert md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Johnny Luong
            </h1>
            <h2 className="text-lg font-medium tracking-tight mt-3 text-slate-300 sm:text-xl">
              Lead Software Developer at BluePath Solutions
            </h2>
            <p className="text-slate-400 mt-4 max-w-xs leading-normal">
              I enjoy learning new things and building cool products for people
              to use.
            </p>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <NavLink href="#about" text="about" />
                <NavLink href="#experience" text="experience" />
                <NavLink href="#projects" text="projects" />
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            <SocialMediaLink
              link="https://github.com/johnnyluong"
              platform="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </SocialMediaLink>

            <SocialMediaLink
              link="https://www.instagram.com/johnnyluong_/"
              platform="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
              </svg>
            </SocialMediaLink>

            <SocialMediaLink
              link="https://www.linkedin.com/in/thejohnnyluong/"
              platform="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </SocialMediaLink>
          </ul>
        </header>

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75  px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm uppercase font-bold tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div className="-my-4">
              <p className="mb-4 text-slate-300">
                My journey started in 2017 at the University of California, San
                Diego, where I earned my Bachelors of Science in
                Mathematics-Computer Science. Being surrounded by incredibly
                talented people and being exposed to the wonders and potential
                of programming, I was hooked into the idea of the possibility of
                building something useful for millions of people with my own two
                hands. I had the revelation that very few disciplines can
                achieve this. Since then I have worked at a company that builds
                super conductor equipment and a consulting firm that serves some
                of the largest pharmaceutical companies in the world.
              </p>
              <p className="mb-4 text-lg text-slate-300">
                I&apos;m currently focused on improving my software engineering
                skill set and developing my ability to find solutions to real
                world problems through software.
              </p>
              <p className="text-lg text-slate-300">
                When I&apos;m not busy building something cool, you can find me
                playing tennis, listening to podcasts, or improving my strength
                at the gym.
              </p>
            </div>
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <Experiences></Experiences>
            <div className="mt-12">
              <a
                className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                href="/Johnny_Luong_Resume.pdf"
                target="_blank"
              >
                <span>
                  <span className="border-b border-transparent pb-px text-slate-400 transition group-hover:border-blue-300 group-hover:text-blue-200 motion-reduce:transition-none">
                    View Résumé
                  </span>
                  <span className="whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </section>
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <Projects></Projects>
          </section>
          <footer className="max-w-md pb-12 text-sm text-slate-500 sm:pb-0">
            <p>
              Built using{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
              >
                Next.js 13
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
              >
                Tailwind CSS
              </a>
              , deployed on{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
              >
                Vercel
              </a>
              . All text content is set with the{" "}
              <a
                href="https://fonts.google.com/specimen/Albert+Sans"
                target="_blank"
                className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
              >
                Albert Sans
              </a>{" "}
              typeface. Design language by{" "}
              <a
                href="https://brittanychiang.com"
                target="_blank"
                className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
              >
                Brittany Chiang
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
