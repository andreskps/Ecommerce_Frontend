"use client";
import { useState } from "react";

import { IoMenu } from "react-icons/io5";

import { IoClose } from "react-icons/io5";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0">
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>

          
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
            >
              {open ? (
                <IoClose className="size-5" />
              ) : (
                <IoMenu className="size-5" />
              )}
            </button>
          </div>

          <div
            className={`transform transition-transform duration-300 ease-in-out overflow-hidden sm:overflow-visible sm:transition-none ${
              open ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Account
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Work
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};