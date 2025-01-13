"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import slugify from "slugify";

export default function NavigationMenuDemo() {
  const [slug, setSlug] = useState("");
  const router = useRouter();

  const handleChange = (e) => setSlug(e.target.value);
  const handleClick = () => router.push(`/blog/${slugify(slug)}`);

  return (
    <div>
      <div className="bg-slate-600 h-full px-1 py-1 sm:px-4 sm:py-4 md:py-10 md:px-10 lg:py-10 lg:px-10">
        <h2 className="text-6xl uppercase font-black text-white text-center p-10">
          Click Here to add slug for your blog
        </h2>
      </div>

      <div className=" my-[1px] h-full px-1 py-1 sm:px-4 sm:py-4 md:py-10 md:px-10 lg:py-10 lg:px-10">
        <div className="form-field-holder my-10 items-center justify-center align-middle flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3">
          <input
            type="text"
            value={slug}
            onChange={handleChange}
            placeholder="Enter slug..."
            className="p-2 rounded-md shadow-md outline-none text-slate-700 w-[80%] sm:w-[50%] md:w-[40%]"
          />
          <Button
            onClick={handleClick}
            className="bg-slate-600 w-[80%] sm:w-fit"
          >
            Submit
          </Button>
        </div>
      </div>

      <div className="bg-slate-600 h-full p-10">
        <p className="font-medium text-white text-center">
          Designed By Kumar Wayadande with ❤️
        </p>
      </div>
    </div>
  );
}
