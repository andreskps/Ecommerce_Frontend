"use client";
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {

  PaginationItem,
  PaginationLink,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Props {
  total: number;
}

export const PaginationProducts = ({ total }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const currentPage = parseInt(searchParams.get("page") || "1");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handlePageChange = (page: number) => {
    router.push(pathname + "?" + createQueryString("page", page.toString()));
  };

  return (
   
    <div className="flex items-center space-x-4">
    <button
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <ChevronLeftIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </button>
    <div className="flex items-center space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-2 rounded-md font-medium ${
            page === currentPage
              ? 'bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
    <button
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === total}
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

  );
};
