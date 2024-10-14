import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { toKebabCase } from "@std/text";
import { textToTransform } from "~/textToTransform.ts";

export const loader = () => {
  return {
    denoVersion: Deno.version,
    sampleText: toKebabCase(textToTransform),
  };
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix on Deno!" },
  ];
};

export default function Index() {
  const { denoVersion, sampleText } = useLoaderData<typeof loader>();

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">
        Welcome to Remix on Deno{" "}
        {denoVersion.deno ? `v${denoVersion.deno}` : "Deploy"}
      </h1>
      <h2>{sampleText}</h2>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
