"use client";

import { BlogCard } from "@/components/BlogCard";

export interface Blog {
  id: number;
  author: string;
  title: string;
  description: string;
  source: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface BlogListProps {
  blogs: Blog[];
}

export const BlogList = ({ blogs = [] }: BlogListProps) => {
  return (
    <div className="columns-1 md:columns-2 xl:columns-3 gap-10 pb-[100px]">
      {blogs?.map((blog: Blog) => {
        return (
          <li key={blog?.id} className="py-5 list-none">
            <BlogCard
              title={blog?.title}
              id={blog?.id?.toString()}
              description={blog?.description}
              author={blog?.author}
              urlToImage={blog?.urlToImage}
              publishedAt={blog?.publishedAt}
            />
          </li>
        );
      })}
    </div>
  );
};
