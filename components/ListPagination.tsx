/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

export interface Pagination {
  page: number;
  pages: number;
  limit: number;
  next: number | null;
  prev: number | null;
  count: number;
}

interface ListPaginationProps {
  pagination: Pagination;
}

export const ListPagination = ({ pagination }: ListPaginationProps) => {
  const router = useRouter();

  const handlePageChange = (e: any, page: any) => {
    router.push(`/blogs?page=${page}`);
  };

  return (
    <Pagination
      count={pagination.pages}
      color="primary"
      page={pagination.page}
      onChange={handlePageChange}
      size="small"
      className="bg-white border-2 border-gray-300 rounded-lg py-2 px-5"
    />
  );
};
