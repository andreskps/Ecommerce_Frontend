import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primario"></div>
    </div>
  );
}