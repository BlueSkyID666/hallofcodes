import type { Metadata } from "next";
import TimelineCard from "@/components/ui/TimelineCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Hall of Codes",
  description:
    "Explore community-built open-source projects crafted by our builders.",
  alternates: {
    canonical: "https://www.hallofcodes.org/projects",
  },
};

export default function Projects() {
  const displayProjects = projects.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Projects with a{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Pulse
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
          Tools, experiments, and community infrastructure built through practical
          collaboration rather than handoffs.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative mx-auto max-w-5xl px-6 pb-28">
        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-gray-800 to-transparent md:left-1/2" />

          <div className="space-y-12 md:space-y-16">
            {displayProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.slug}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Central Spine Node */}
                  <div className="absolute left-4 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-950 md:left-1/2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  </div>

                  {/* Alternating Spacer */}
                  <div className="hidden w-5/12 md:block" />

                  {/* Timeline Card */}
                  <div className="ml-10 w-full md:ml-0 md:w-5/12">
                    <TimelineCard project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
