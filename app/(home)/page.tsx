/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { BlogList } from "../blogs/BlogList";

const LatestBlogsPage = async () => {
  const { blogs }: any = await getLatestBlogsData();

  return (
    <div className="pt-5 px-4 sm:px-8">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Latest Blogs</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

const getLatestBlogsData = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BLOGS_API}/blogs/top-ten`
  );

  if (!response || !response.data) {
    return {
      notFound: true,
    };
  }

  const { data } = response;

  return {
    blogs: data.blogs,
  };
};

export default LatestBlogsPage;
