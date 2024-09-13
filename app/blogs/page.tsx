/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/blogs.tsx
import React from "react";
import axios from "axios";
import { Blog, BlogList } from "./BlogList";
import { ListPagination } from "@/components/ListPagination";

interface SerachParams {
  page?: number | undefined;
}

interface BlogsPageProps {
  searchParams: SerachParams;
}

const BlogsPage = async ({ searchParams }: BlogsPageProps) => {
  const { blogs, pagination }: any = await getBlogsData({
    page: searchParams.page,
  });

  return (
    <div className="pt-5 px-4 sm:px-8">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Blogs</h1>
      <BlogList blogs={blogs} />
      <div className="w-full fixed bottom-3 left-1/2 transform -translate-x-1/2 flex justify-center">
        <ListPagination pagination={pagination} />
      </div>
    </div>
  );
};

const getBlogsData = async ({ page }: any) => {
  const LIMIT_PER_PAGE = 15;
  const params = { page, limit: LIMIT_PER_PAGE };

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BLOGS_API}/blogs`,
    { params }
  );

  if (!response || !response.data) {
    return {
      notFound: true,
    };
  }

  const { data } = response;

  return {
    blogs: data.blogs,
    pagination: {
      page: data.page,
      pages: data.pages,
      limit: data.limit,
      next: data.next,
      prev: data.prev,
      count: data.count,
    },
  };
};

export default BlogsPage;
