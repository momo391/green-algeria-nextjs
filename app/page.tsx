import { Hero } from "@/components/section/hero";
import { Latest } from "@/components/section/latest";

import { About } from "@/components/section/about";
import { Comment, MarqueeDemo } from "@/components/section/comments";
import { Help } from "@/components/section/help";

export default function Page() {
  return (
    <main className="space-y-64 mb-32">
      <Hero />
      <Latest />
      <Help />
      <About />
      <Comment />
    </main>
  );
}
