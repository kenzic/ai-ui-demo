"use client";

import Image from "next/image";

import { Article } from "../components/article";
import { Slot } from "../components/slot";
import { LoadingIndicator } from "../components/display";
import { UIState } from "@/components/context";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingIndicator />
      <header className="text-center px-20 py-6 bg-slate-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          🚧 Experiemental Demo of UI as a function of AI 🚧
        </h1>
        <p className="text-sm px-12">
          🧪 This demo explores how we can go beyond traditional chatbot
          interfaces by generating content and selecting the best UI components
          from your existing library. While AI can easily create UI, the results
          often don&apos;t align with your brand identity. This demo shows how
          LLMs, like OpenAI&apos;s, can not only generate content but also
          choose the most suitable components to present it effectively.
        </p>
      </header>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 px-24 py-8">
        <article className="col-span-3 row-span-5 p-2">
          <Article />
        </article>
        <aside className="col-span-2 row-span-5 col-start-4 p-3 border-l-2 border-l-slate-200">
          <h2 className="mb-3 text-md font-semibold tracking-wide text-gray-600 uppercase">
            Additional Context
          </h2>
          <Slot
            shouldUpdate={(uiState) => {
              return uiState.length > 0 &&
                uiState.at(-1)?.component !== "SummaryComponent"
                ? [uiState.at(-1) as UIState]
                : false;
            }}
          >
            <p className="mt-2">
              👉 Click the links in the article to see more information.
            </p>
          </Slot>
        </aside>
      </div>
    </main>
  );
}
