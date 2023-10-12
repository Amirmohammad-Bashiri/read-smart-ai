import Link from "next/link";
import { ArrowRight } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

function HeroSection() {
  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center justify-center mb-12 text-center mt-28 sm:mt-40">
        <div className="flex items-center justify-center py-2 mx-auto mb-4 space-x-2 overflow-hidden transition-all bg-white border border-gray-200 rounded-full shadow-md max-w-fit px-7 backdrop-blur hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Give your PDFs superpower!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-orange-600">documents</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Readsmart allows you to have conversations with any PDF document.
          Simply upload your file and start asking questions right away.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 lg:py-4 md:text-lg",
          })}
          href="/dashboard"
          target="_blank">
          Get started <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
