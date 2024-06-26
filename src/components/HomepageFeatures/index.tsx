import React, { useState } from "react";
import styles from "./styles.module.css";

interface FeatureType {
  title: string;
  description: string;
  demo: any;
}

export const HomepageFeatures = () => {
  const [features, setFeatures] = useState<FeatureType[]>([
    {
      title: "Set up your desired environment",
      description:
        "Leverage our code snippet editor and interactive tutorials to optimize your development process.",
      demo: "https://we-simulate-bucket.s3.ap-southeast-1.amazonaws.com/setup-env.gif",
    },
    {
      title: "Build, publish and call your package",
      description:
        "Discover new VSCode features and best practices through our engaging learning resources.",
      demo: "https://we-simulate-bucket.s3.ap-southeast-1.amazonaws.com/build-publish-call.gif",
    },
    {
      title: "Preview your transaction",
      description:
        "Enjoy a seamless experience by integrating our tool directly with your Visual Studio Code.",
      demo: "https://we-simulate-bucket.s3.ap-southeast-1.amazonaws.com/preview-transaction.gif",
    },
    {
      title: "Dynamic Graph Visualization",
      description:
        "Enjoy a seamless experience by integrating our tool directly with your Visual Studio Code.",
      demo: "https://we-simulate-bucket.s3.ap-southeast-1.amazonaws.com/dyn-obj-graph.gif",
    },
  ]);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleSelectFeature = (index) => {
    console.log(index);
    setSelectedFeature(index);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  The interface of Sui CLI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  Open source, free to use, and custom your simulation scenarios
                </p>
                <div className="mt-6 space-x-4">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=weminal-labs.sui-simulator-vscode"
                    target="_blank"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  >
                    Download
                  </a>
                  <div className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                    Try Online
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <iframe
                  className="rounded-xl"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BHRxeF_visM?si=v0M2tTDN-wfWtM9w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Level up your skills with VSCode Experience
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our introductory tool offers a range of powerful features to
                  help you unlock the full potential of Visual Studio Code.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-gray-800">
                <CodeIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Improve user experience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We're simplifying the sui cli commands for a more efficient,
                  user-friendly experience.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-gray-800">
                <BookIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">
                  Create Simulation Scenarios
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  It enables transactions with tools that simulate the impact of
                  updated objects on-chain.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-gray-800">
                <PlugIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Code generation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  From command line interface to TypeScript SDKs for faster
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Demo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Demo Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="VSCode Intro Tool Features"
                className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last ${
                  selectedFeature === 0 ? "place-self-start" : ""
                }
                ${
                  selectedFeature === features.length - 1
                    ? "place-self-end"
                    : ""
                }`}
                src={features[selectedFeature].demo}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  {features.map((feature, index) => {
                    return (
                      <li
                        className={`grid gap-1 ${
                          selectedFeature === index
                            ? styles["feature_selected"]
                            : ""
                        } 
                        `}
                        onClick={() => handleSelectFeature(index)}
                      >
                        <div className={`grid gap-1 p-2`}>
                          <h3 className="text-xl font-bold">{feature.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={require("@site/static/img/sui-simulator.png").default}
                  alt="Grid Item 1"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-white dark:bg-gray-900">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Grid Item 1
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    This is a short description of the first grid item.
                  </p>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={require("@site/static/img/sui-simulator.png").default}
                  alt="Grid Item 2"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 bg-white dark:bg-gray-900">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    Grid Item 2
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    This is a short description of the second grid item.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function PlugIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
