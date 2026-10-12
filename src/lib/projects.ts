export interface Project {
    slug: string;
    name: string;
    author: string;
    authorUrl?: string;
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
        author: "hallofcodes",
        authorUrl: "https://github.com/hallofcodes",
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
        author: "dconco",
        authorUrl: "https://github.com/dconco",
        description:
          "A high-speed cross-platform file transfer utility engineered for rapid local-network and peer-to-peer data distribution. Eliminates third-party cloud intermediaries and upload bottlenecks by utilizing direct socket pipelines, zero-configuration network discovery, and secure point-to-point payloads.",
        tags: ["Cross-platform", "Networking", "P2P", "CLI"],
        html_url: "https://github.com/hallofcodes/WarpShare",
        coverImage:
          "https://opengraph.githubassets.com/1/hallofcodes/WarpShare",
      },
      {
        slug: "devpulse",
        name: "DevPulse",
        author: "hallofcodes",
        authorUrl: "https://github.com/hallofcodes",
        description:
          "A real-time developer productivity and activity cockpit. DevPulse centralizes continuous integration statuses, repository commit activity, pull request velocity, and team benchmarks into unified visual dashboards designed to improve transparency across open-source teams.",
        tags: ["Productivity", "Dashboard", "DevOps", "Web"],
        html_url: "https://github.com/hallofcodes/devpulse",
        coverImage:
          "https://opengraph.githubassets.com/1/hallofcodes/devpulse",
      },
    {
      slug: "worldwide-infectious-disease-surveillance-platform",
      name: "Worldwide Infectious Disease Surveillance Platform",
      author: "mrepol742",
      authorUrl: "https://github.com/mrepol742",
      description:
        "A comprehensive global health monitoring platform engineered to aggregate publicly accessible epidemiological surveillance feeds. The system standardizes incident datasets, plots emerging disease outbreaks across interactive geographic coordinates, and maintains historical trajectory telemetry for research and public analysis.",
      tags: ["TypeScript", "Data Analytics", "Public Health", "GeoMapping"],
      html_url:
        "https://github.com/hallofcodes/worldwide-infectious-disease-surveillance-platform",
      coverImage:
        "https://opengraph.githubassets.com/1/hallofcodes/worldwide-infectious-disease-surveillance-platform",
    },
    
    
    
    {
      slug: "sprintsight",
      name: "SprintSight",
      author: "hallofcodes",
      authorUrl: "https://github.com/hallofcodes",
      description:
        "An agile team telemetry platform that visualizes module release states and active GitHub commit frequency. Delivers real-time insight into repository health, work-in-progress bottlenecks, and milestone progression without requiring manual sprint logs.",
      tags: ["Agile", "GitHub Actions", "Visualization", "Tooling"],
      html_url: "https://github.com/hallofcodes/sprintsight",
      coverImage:
        "https://opengraph.githubassets.com/1/hallofcodes/sprintsight",
    },
    {
      slug: "Force-Dark-Mode",
      name: "Force Dark Mode",
      author: "hallofcodes",
      authorUrl: "https://github.com/hallofcodes",
      description:
        "A lightweight, dependency-free JavaScript utility that dynamically recalculates and inverts HTML color values. Implements smart contrast preservation for images, canvas elements, and text nodes to deliver seamless dark mode across legacy web documents.",
      tags: ["JavaScript", "Accessibility", "Frontend", "UI"],
      html_url: "https://github.com/hallofcodes/Force-Dark-Mode",
      coverImage:
        "https://opengraph.githubassets.com/1/hallofcodes/Force-Dark-Mode",
    },
  ];