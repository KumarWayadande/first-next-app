"use client";
import { usePathname } from "next/navigation";


function BlogPage() {
  const pathName = usePathname();
  return <div>Path Url :- {pathName}</div>;
}

export default BlogPage;
