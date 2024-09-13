/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { BlogView } from "@/components/BlogView";
import { NotFound } from "@/components/NotFound";

const BlogById = async ({ params }: any) => {
  const { id } = params;
  const blog: any = await getBlogById(id);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="pt-5 px-4 sm:px-8">
      <BlogView {...blog} />
    </div>
  );
};

const getBlogById = async (id: any) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BLOGS_API}/blogs/${id}`
    );

    if (!response || !response.data) {
      return null;
    }

    return response.data;
  } catch (err) {
    return null;
  }
};

export default BlogById;
