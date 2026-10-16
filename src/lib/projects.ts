export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  html_url: string;
  homepage?: string;
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: "acode-ai-agent-plugin",
    name: "Rutex (Acode AI Agent Plugin)",
    description:
      "An autonomous code intelligence assistant engineered specifically for mobile development within the Acode IDE. Leverages large language models to inspect source trees, draft boilerplate modules, automate refactoring, and execute terminal commands through a secure loop on Android.",
    tags: ["TypeScript", "AI Agent", "Plugin", "Mobile Dev"],
    html_url: "https://github.com/hallofcodes/acode-ai-agent-plugin",
    coverImage:
      "https://opengraph.githubassets.com/1/hallofcodes/acode-ai-agent-plugin",
  },
  {
    slug: "WarpShare",
    name: "WarpShare",
    description:
      "A high-speed cross-platform file transfer utility engineered for rapid local-network and peer-to-peer data distribution. Eliminates third-party cloud intermediaries and upload bottlenecks by utilizing direct socket pipelines, zero-configuration network discovery, and secure point-to-point payloads.",
    tags: ["Cross-platform", "Networking", "P2P", "CLI"],
    html_url: "https://github.com/hallofcodes/WarpShare",
    coverImage: "https://opengraph.githubassets.com/1/hallofcodes/WarpShare",
  },
  {
    slug: "devpulse",
    name: "DevPulse",
    description:
      "A real-time developer productivity and activity cockpit. DevPulse centralizes continuous integration statuses, repository commit activity, pull request velocity, and team benchmarks into unified visual dashboards designed to improve transparency across open-source teams.",
    tags: ["Productivity", "Dashboard", "DevOps", "Web"],
    html_url: "https://github.com/hallofcodes/devpulse",
    coverImage: "https://opengraph.githubassets.com/1/hallofcodes/devpulse",
  },
  {
    slug: "worldwide-infectious-disease-surveillance-platform",
    name: "Worldwide Infectious Disease Surveillance Platform",
    description:
      "A comprehensive global health monitoring platform engineered to aggregate publicly accessible epidemiological surveillance feeds. The system standardizes incident datasets, plots emerging disease outbreaks across interactive geographic coordinates, and maintains historical trajectory telemetry for research and public analysis.",
    tags: ["TypeScript", "Data Analytics", "Public Health", "GeoMapping"],
    html_url:
      "https://github.com/hallofcodes/worldwide-infectious-disease-surveillance-platform",
    coverImage:
      "https://opengraph.githubassets.com/1/hallofcodes/worldwide-infectious-disease-surveillance-platform",
  },
];
